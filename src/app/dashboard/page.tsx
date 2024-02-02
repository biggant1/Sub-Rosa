import SideBar from "@/components/SideBar";
import GroupsIcon from "@/components/Svgs/GroupsIcon";
import UnreadReportsIcon from "@/components/Svgs/UnreadReportsIcon";

export default function Dashboard() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="dashboard"></SideBar>
      <div className="flex gap-10 items-center justify-center flex-grow h-screen">
        <div className="flex flex-column justify-center w-[25%] bg-rose-900 h-4/5 rounded-[60px]">
          <div className="flex items-center self-start gap-3 pt-6">
            <GroupsIcon className="w-16 h-auto"></GroupsIcon>
            <h1 className="text-rose-100 text-3xl w-32">RECENT GROUPS</h1>
          </div>
        </div>
        <div className="flex flex-column justify-center w-[50%] bg-rose-900 h-4/5 rounded-[60px]">
          <div className="flex items-center self-start gap-3 pt-6">
            <UnreadReportsIcon className="w-16 h-auto"></UnreadReportsIcon>
            <h1 className="text-rose-100 text-2xl lg:text-4xl">
              UNREAD REPORTS
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
