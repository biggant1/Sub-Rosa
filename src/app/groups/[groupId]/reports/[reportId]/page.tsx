import Heading from "@/components/groups/Heading";
import LabeledInput from "@/components/groups/createreport/LabeledInput";
import SideBar from "@/components/shared/SideBar";

type reportParamsType = { groupId: string; reportId: string };

export default function SingleReport({
  params: { groupId, reportId },
}: {
  params: reportParamsType;
}) {
  return (
    <main className="flex max-w-screen">
      <SideBar selected="groups"></SideBar>
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <Heading title={`ROOM 2344 - Report`}></Heading>
        <div className="flex flex-col gap-10 flex-grow w-full pl-12 pt-5 pb-10">
          <LabeledInput label="TITLE" disabled={true}></LabeledInput>
          <LabeledInput
            label="BODY"
            multiline={true}
            disabled={true}
          ></LabeledInput>
          <LabeledInput
            label="APPROXIMATE DATE UPLOADED"
            disabled={true}
          ></LabeledInput>
        </div>
      </div>
    </main>
  );
}
