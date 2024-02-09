import SideBar from "@/components/shared/SideBar";
import SquareButton from "@/components/shared/SquareButton";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Heading from "@/components/groups/Heading";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function Reports() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <Heading title={"ROOM 2344 - Reports"}></Heading>
        <div className="flex-grow w-full pl-12 pr-12 flex flex-wrap gap-6 content-start items-start">
          <ReportButton></ReportButton>
          <ReportButton></ReportButton>
          <ReportButton></ReportButton>
          <ReportButton></ReportButton>
          <ReportButton></ReportButton>
          <ReportButton></ReportButton>
        </div>
      </div>
    </main>
  );
}

function ReportButton({ uploadDate = new Date() }: { uploadDate?: Date }) {
  return (
    <SquareButton
      mainText="TITLE GOES HERE"
      additionalTopRight={
        <p className={`text-[#FDB9B9] text-xl absolute top-1 right-2`}>
          {timeAgo.format(uploadDate)}
        </p>
      }
      to="/groups/groupId/reports/reportId"
    ></SquareButton>
  );
}
