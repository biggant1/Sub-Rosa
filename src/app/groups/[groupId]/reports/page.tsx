import SideBar from "@/components/SideBar";
import SquareButton from "@/components/SquareButton";
import { Baloo_Chettan_2, Inter, Lexend } from "next/font/google";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function Reports() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <div className="h-36 w-full flex items-center justify-between">
          <h1 className={`pl-12 text-rose-900 text-7xl ${lexend.className}`}>
            Reports
          </h1>
        </div>
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
        <p
          className={`text-[#FDB9B9] text-xl absolute top-1 right-2 ${inter.className}`}
        >
          {timeAgo.format(uploadDate)}
        </p>
      }
      to="/group/groupId/reports/reportId"
    ></SquareButton>
  );
}
