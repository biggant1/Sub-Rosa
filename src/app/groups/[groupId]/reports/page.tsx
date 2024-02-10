import SideBar from "@/components/shared/SideBar";
import SquareButton from "@/components/shared/SquareButton";
import { format } from "timeago.js";

import Heading from "@/components/groups/Heading";
import { dateString } from "@/app/lib/types";

export default function Reports() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <Heading title={"ROOM 2344 - Reports"}></Heading>
        <div className="flex-grow w-full pl-12 pr-12 flex flex-wrap gap-6 content-start items-start">
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
          <ReportButton uploadDate={`2024-02-09`}></ReportButton>
        </div>
      </div>
    </main>
  );
}

function ReportButton({ uploadDate }: { uploadDate: dateString }) {
  return (
    <SquareButton
      mainText="TITLE GOES HERE"
      additionalTopRight={
        <p className={`text-[#FDB9B9] text-xl absolute top-1 right-2`}>
          {format(uploadDate)}
        </p>
      }
      to="/groups/groupId/reports/reportId"
    ></SquareButton>
  );
}
