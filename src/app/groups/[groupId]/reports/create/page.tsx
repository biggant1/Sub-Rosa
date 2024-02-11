import { paramsType } from "@/app/lib/types";
import Heading from "@/components/groups/Heading";
import SideBar from "@/components/shared/SideBar";
import CreateReportForm from "./CreateReportForm";

export default function CreateReport({
  params: { groupId },
}: {
  params: paramsType;
}) {
  return (
    <main className="flex max-w-screen">
      <SideBar selected="groups"></SideBar>
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <Heading title={`ROOM 2344`}></Heading>
        <CreateReportForm groupId={groupId}></CreateReportForm>
      </div>
    </main>
  );
}
