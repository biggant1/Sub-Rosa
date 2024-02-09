import Button from "@/components/shared/Button";
import { IconedCard } from "@/components/shared/IconedCard";
import SideBar from "@/components/shared/SideBar";
import GroupsIcon from "@/components/svgs/GroupsIcon";
import UnreadReportsIcon from "@/components/svgs/UnreadReportsIcon";

export default function Dashboard() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="dashboard"></SideBar>
      <div className="flex gap-10 items-center justify-center flex-grow h-screen">
        <IconedCard
          title="RECENT GROUPS"
          icon={<GroupsIcon className="w-16 h-auto"></GroupsIcon>}
        >
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
          <Button>Hello World</Button>
        </IconedCard>
        <div className="flex flex-col justify-center w-[40vw] bg-rose-900 h-4/5 rounded-[60px] overflow-hidden">
          <div className="flex justify-center items-center w-full self-start gap-3 pt-6 h-24 flex-initial">
            <UnreadReportsIcon className="w-16 h-auto"></UnreadReportsIcon>
            <h1 className="text-rose-100 text-4xl">UNREAD REPORTS</h1>
          </div>
          <div className="pt-8 flex flex-col items-center gap-4 flex-1 overflow-y-auto pb-8 no-scrollbar">
            <Button height={"5rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              quis! Vitae nesciunt culpa quam amet quae facilis officia sit
              ipsam ea, veniam suscipit officiis pariatur delectus! Laboriosam
              soluta vel ex velit similique quo accusantium voluptatibus dolore
              fugiat? Ab, doloremque voluptatem.
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
