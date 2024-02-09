import SideBar from "@/components/shared/SideBar";
import EditIcon from "@/components/svgs/EditIcon";
import SquareButton from "@/components/shared/SquareButton";
import { Baloo_Chettan_2, Lexend } from "next/font/google";
import Link from "next/link";
import Heading from "@/components/groups/Heading";

const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const balooBold = Baloo_Chettan_2({ weight: "700", subsets: ["latin"] });

export default function Groups() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <Heading title="Groups">
          <Link
            className={`text-4xl pr-12 text-[#193142] ${balooBold.className}`}
            href={"/groups/join"}
          >
            Join a new group...
          </Link>
        </Heading>
        <div className="flex-grow w-full pl-12 pr-12 flex flex-wrap gap-6 content-start items-start">
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
          <GroupButton></GroupButton>
        </div>
      </div>
    </main>
  );
}

function GroupButton({ newReports = 0 }: { newReports?: number }) {
  return (
    <SquareButton
      mainText={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate dolore architecto perspiciatis voluptatem ipsum repellat tempora ipsam magnam id`}
      to="/groups/groupId"
      additionalTopRight={
        <Link
          href={"/groups/groupId/edit"}
          className="absolute top-2 right-5 w-10 h-10 z-20"
        >
          <EditIcon></EditIcon>
        </Link>
      }
      additionalBottomText={
        newReports
          ? ""
          : `${newReports} new ${newReports == 1 ? "report" : "reports"}`
      }
    ></SquareButton>
  );
}
