import { paramsType } from "@/app/lib/types";
import Heading from "@/components/groups/Heading";
import LabeledInput from "@/components/groups/createreport/LabeledInput";
import SideBar from "@/components/shared/SideBar";
import RefreshIcon from "@/components/svgs/RefreshIcon";

export default function GroupMember({
  params: { groupId },
}: {
  params: paramsType;
}) {
  return (
    <main className="flex max-w-screen">
      <SideBar selected="groups"></SideBar>
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <Heading title={`ROOM 2344`}></Heading>
        <div className="flex flex-col gap-10 flex-grow w-full pl-12 pb-10">
          <LabeledInput label="TITLE"></LabeledInput>
          <RefreshableInput label="ANONYMIZED TITLE"></RefreshableInput>
          <LabeledInput label="BODY" multiline={true}></LabeledInput>
          <RefreshableInput
            label="ANONYMIZED BODY"
            multiline={true}
          ></RefreshableInput>
        </div>
      </div>
    </main>
  );
}

function RefreshableInput({
  label,
  multiline = false,
}: {
  label: string;
  multiline?: boolean;
}) {
  return (
    <LabeledInput
      label={label}
      disabled={true}
      multiline={multiline}
      additionalComponent={
        <RefreshIcon className="h-12 flex-shrink-0 mt-1"></RefreshIcon>
      }
    ></LabeledInput>
  );
}
