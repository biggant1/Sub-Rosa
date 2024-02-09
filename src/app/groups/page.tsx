import SideBar from "@/components/SideBar";
import EditIcon from "@/components/Svgs/EditIcon";
import SquareButton from "@/components/SquareButton";
import { Baloo_Chettan_2, Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const balooBold = Baloo_Chettan_2({ weight: "700", subsets: ["latin"] });
const balooReg = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function Groups() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <div className="h-36 w-full flex items-center justify-between">
          <h1 className={`pl-12 text-rose-900 text-7xl ${lexend.className}`}>
            Groups
          </h1>
          <Link
            className={`text-4xl pr-12 text-[#193142] ${balooBold.className}`}
            href={"/groups/join"}
          >
            Join a new group...
          </Link>
        </div>
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
