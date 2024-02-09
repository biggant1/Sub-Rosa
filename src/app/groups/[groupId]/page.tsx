import Button from "@/components/Button";
import { IconedCard } from "@/components/IconedCard";
import SideBar from "@/components/SideBar";
import CreateReportIcon from "@/components/Svgs/CreateReportIcon";
import GroupSettingsIcon from "@/components/Svgs/GroupSettingsIcon";
import JoinUrlIcon from "@/components/Svgs/JoinUrlIcon";
import NewReportsIcon from "@/components/Svgs/NewReportsIcon";
import ViewReportsIcon from "@/components/Svgs/ViewReportsIcon";
import { Baloo_Chettan_2, Lexend } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

type paramsType = { groupId: string };

const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const balooReg = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function SingleGroup({
  params: { groupId },
}: {
  params: paramsType;
}) {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <div className="h-36 w-full flex items-center justify-between flex-shrink-0">
          <h1 className={`pl-12 text-rose-900 text-7xl ${lexend.className}`}>
            Groups
          </h1>
        </div>
        <div className="flex gap-10 items-start justify-center flex-grow h-screen">
          <IconedCard
            icon={<NewReportsIcon className="w-16 h-auto"></NewReportsIcon>}
            className="h-[90%] mt-4 [&>h1]:w-52"
            title="NEW REPORTS"
          >
            <Button>LOREM</Button>
            <Button>IPSUM</Button>
            <Button>TEST</Button>
          </IconedCard>
          <div className="flex flex-col items-center justify-between py-24 w-[40vw] bg-rose-900 h-[90%] rounded-[60px] mt-4">
            <GroupButton url={`/groups/${groupId}/create`}>
              <CreateReportIcon></CreateReportIcon>
              CREATE A REPORT
            </GroupButton>
            <GroupButton url={`/groups/${groupId}/reports`}>
              <ViewReportsIcon></ViewReportsIcon>
              VIEW ALL REPORTS
            </GroupButton>
            <GroupButton url={``}>
              <JoinUrlIcon></JoinUrlIcon>
              COPY JOIN URL
            </GroupButton>
            <GroupButton url={`/groups/${groupId}/settings`}>
              <GroupSettingsIcon></GroupSettingsIcon>
              GROUP SETTINGS
            </GroupButton>
          </div>
        </div>
      </div>
    </main>
  );
}

function GroupButton({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={url}
      className={`w-[85%] text-5xl text-rose-100 flex items-center gap-6 ${className} ${balooReg.className}`}
    >
      {children}
    </Link>
  );
}
