import { group } from "@/app/actions/getGroup";
import GroupAction from "@/components/groups/GroupAction";
import Heading from "@/components/groups/Heading";
import SideBar from "@/components/shared/SideBar";
import CreateReportIcon from "@/components/svgs/CreateReportIcon";
import JoinUrlIcon from "@/components/svgs/JoinUrlIcon";
import LeaveGroupIcon from "@/components/svgs/LeaveGroupIcon";
import ViewReportsIcon from "@/components/svgs/ViewReportsIcon";

export default function GroupMember({ group }: { group: group }) {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen">
        <Heading title={group.name}></Heading>
        <div className="flex gap-10 items-start justify-center flex-grow">
          <div className="flex flex-col items-center justify-between py-24 w-[42vw] min-w-[45rem] bg-rose-900 h-[90%] rounded-[60px] mt-4">
            <GroupAction url={`/groups/${group.id}/reports/create`}>
              <CreateReportIcon></CreateReportIcon>
              CREATE A REPORT
            </GroupAction>
            <GroupAction url={`/groups/${group.id}/reports`}>
              <ViewReportsIcon></ViewReportsIcon>
              VIEW ALL REPORTS
            </GroupAction>
            <GroupAction url={``}>
              <JoinUrlIcon></JoinUrlIcon>
              COPY JOIN URL
            </GroupAction>
            <GroupAction url={``}>
              <LeaveGroupIcon></LeaveGroupIcon>
              LEAVE GROUP
            </GroupAction>
          </div>
        </div>
      </div>
    </main>
  );
}
