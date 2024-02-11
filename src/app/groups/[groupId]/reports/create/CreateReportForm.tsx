"use client";

import fetchChatGPT from "@/app/actions/fetchChatGPT";
import submitReportForm from "@/app/actions/submitReportForm";
import LabeledInput from "@/components/groups/createreport/LabeledInput";
import RefreshIcon from "@/components/svgs/RefreshIcon";
import SubmitInputIcon from "@/components/svgs/SubmitInputIcon";
import { useState } from "react";

export default function CreateReportForm({ groupId }: { groupId: string }) {
  const [title, setTitle] = useState("");
  const [anonTitle, setAnonTitle] = useState("");
  const [body, setBody] = useState("");
  const [anonBody, setAnonBody] = useState("");

  return (
    <div className="flex flex-col gap-10 flex-grow w-full pl-12 pb-10">
      <LabeledInput
        label="TITLE"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        additionalComponent={
          <SubmitInputIcon
            className="h-10 flex-shrink-0 mt-2 "
            role="button"
            onClick={async () => {
              setAnonTitle("Loading...");
              setAnonTitle(await fetchChatGPT(title));
            }}
          ></SubmitInputIcon>
        }
      ></LabeledInput>
      <RefreshableInput
        label="ANONYMIZED TITLE"
        defaultValue={anonTitle}
        onClick={async () => {
          setAnonTitle("Loading...");
          setAnonTitle(await fetchChatGPT(title));
        }}
      ></RefreshableInput>
      <LabeledInput
        label="BODY"
        name="body"
        multiline={true}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        additionalComponent={
          <SubmitInputIcon
            className="h-10 flex-shrink-0 mt-2 "
            role="button"
            onClick={async () => {
              setAnonBody("Loading...");
              setAnonBody(await fetchChatGPT(body));
            }}
          ></SubmitInputIcon>
        }
      ></LabeledInput>
      <RefreshableInput
        label="ANONYMIZED BODY"
        defaultValue={anonBody}
        multiline={true}
        onClick={async () => {
          setAnonBody("Loading...");
          setAnonBody(await fetchChatGPT(body));
        }}
      ></RefreshableInput>
      <button
        type="button"
        onClick={async (e) => {
          let button = e.target as HTMLButtonElement;
          button.disabled = true;
          let response = await submitReportForm(anonTitle, anonBody, groupId);
          if (!response.error) return;

          alert(response.errorMsg);
          button.disabled = false;
        }}
        className="w-4/6 min-w-96 bg-rose-800 rounded-lg h-12 text-rose-100 text-xl hover:bg-rose-950 disabled:bg-black"
      >
        Submit anonymized report!
      </button>
    </div>
  );
}

function RefreshableInput({
  label,
  defaultValue,
  multiline = false,
  onClick,
}: {
  label: string;
  defaultValue: string;
  onClick: () => void;
  multiline?: boolean;
}) {
  return (
    <LabeledInput
      label={label}
      disabled={true}
      multiline={multiline}
      additionalComponent={
        <RefreshIcon
          className="h-12 flex-shrink-0 mt-1"
          role="button"
          onClick={onClick}
        ></RefreshIcon>
      }
      defaultValue={defaultValue}
    ></LabeledInput>
  );
}
