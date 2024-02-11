import SideBar from "@/components/shared/SideBar";
import SquareButton from "@/components/shared/SquareButton";
import { format } from "timeago.js";
import Heading from "@/components/groups/Heading";
import { dateString, paramsType } from "@/app/lib/types";
import { use } from "react";
import getReports from "@/app/actions/getReports";
import getGroup from "@/app/actions/getGroup";

export default function Reports({ params }: { params: paramsType }) {
  const group = use(getGroup(params.groupId));
  if (!group) return <></>;

  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <Heading title={`${group.name} - Reports`}></Heading>
        <div className="flex-grow w-full pl-12 pr-12 flex flex-wrap gap-6 content-start items-start">
          {use(getReports(params.groupId)).map((report) => (
            <ReportButton
              title={report.title}
              to={`/groups/${params.groupId}/reports/${report.id}`}
              uploadDate={report.approximateDate.toISOString().split("T")[0]}
              key={report.id}
            ></ReportButton>
          ))}
        </div>
      </div>
    </main>
  );
}

function ReportButton({
  uploadDate,
  title,
  to,
}: {
  uploadDate: string;
  title: string;
  to: string;
}) {
  return (
    <SquareButton
      mainText={title}
      additionalTopRight={
        <p className={`text-[#FDB9B9] text-xl absolute top-1 right-2`}>
          {format(uploadDate)}
        </p>
      }
      to={to}
    ></SquareButton>
  );
}
