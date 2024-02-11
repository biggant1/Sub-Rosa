import { paramsType } from "@/app/lib/types";
import GroupAction from "@/components/groups/GroupAction";
import Heading from "@/components/groups/Heading";
import Button from "@/components/shared/Button";
import { IconedCard } from "@/components/shared/IconedCard";
import SideBar from "@/components/shared/SideBar";
import CreateReportIcon from "@/components/svgs/CreateReportIcon";
import GroupSettingsIcon from "@/components/svgs/GroupSettingsIcon";
import JoinUrlIcon from "@/components/svgs/JoinUrlIcon";
import NewReportsIcon from "@/components/svgs/NewReportsIcon";
import ViewReportsIcon from "@/components/svgs/ViewReportsIcon";

export default function GroupAdmin({
  params: { groupId },
}: {
  params: paramsType;
}) {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen">
        <Heading title={"ROOM 2344"}></Heading>
        <div className="flex gap-10 items-start justify-center flex-grow">
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
            <GroupAction url={`/groups/${groupId}/reports/create`}>
              <CreateReportIcon></CreateReportIcon>
              CREATE A REPORT
            </GroupAction>
            <GroupAction url={`/groups/${groupId}/reports`}>
              <ViewReportsIcon></ViewReportsIcon>
              VIEW ALL REPORTS
            </GroupAction>
            <GroupAction url={``}>
              <JoinUrlIcon></JoinUrlIcon>
              COPY JOIN URL
            </GroupAction>
            <GroupAction url={`/groups/${groupId}/settings`}>
              <GroupSettingsIcon></GroupSettingsIcon>
              GROUP SETTINGS
            </GroupAction>
          </div>
        </div>
      </div>
    </main>
  );
}
