import getReport from "@/app/actions/getReport";
import Heading from "@/components/groups/Heading";
import LabeledInput from "@/components/groups/createreport/LabeledInput";
import SideBar from "@/components/shared/SideBar";
import { use } from "react";

type reportParamsType = { groupId: string; reportId: string };

export default function SingleReport({
  params: { groupId, reportId },
}: {
  params: reportParamsType;
}) {
  const report = use(getReport(groupId, reportId));

  return (
    <main className="flex max-w-screen">
      <SideBar selected="groups"></SideBar>
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <Heading title={`${report?.groupName} - Report`}></Heading>
        <div className="flex flex-col gap-10 flex-grow w-full pl-12 pt-5 pb-10">
          {report ? (
            <>
              <LabeledInput
                label="TITLE"
                disabled={true}
                defaultValue={report.title}
              ></LabeledInput>
              <LabeledInput
                label="BODY"
                multiline={true}
                disabled={true}
                defaultValue={report.body}
              ></LabeledInput>
              <LabeledInput
                label="APPROXIMATE DATE UPLOADED"
                disabled={true}
                defaultValue={
                  report.approximateDate.toISOString().split("T")[0]
                }
              ></LabeledInput>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
