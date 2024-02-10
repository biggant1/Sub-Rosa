import SideBar from "@/components/shared/SideBar";
import SquareButton from "@/components/shared/SquareButton";
import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import Heading from "@/components/groups/Heading";
import GroupSettingsIcon from "@/components/svgs/GroupSettingsIcon";

const balooBold = Baloo_Chettan_2({ weight: "700", subsets: ["latin"] });

export default function Groups() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen overflow-y-auto">
        <Heading title="Groups">
          <div className="flex flex-col gap-2">
            <Link
              className={`text-4xl pr-12 text-[#193142] ${balooBold.className}`}
              href={"/groups/join"}
            >
              Join a new group...
            </Link>
            <Link
              className={`text-4xl pr-12 text-[#193142] ${balooBold.className}`}
              href={"/groups/create"}
            >
              Create a new group...
            </Link>
          </div>
        </Heading>
        <div className="flex-grow w-full pl-12 pr-12 flex flex-wrap gap-6 content-start items-start">
          <GroupButton isAdmin={true} newReports={2}></GroupButton>
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

function GroupButton({
  newReports = 0,
  isAdmin = false,
}: {
  newReports?: number;
  isAdmin?: boolean;
}) {
  return (
    <SquareButton
      mainText={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate dolore architecto perspiciatis voluptatem ipsum repellat tempora ipsam magnam id`}
      to="/groups/groupId"
      additionalTopRight={
        isAdmin ? (
          <Link
            href={"/groups/groupId/settings"}
            className="absolute top-2 right-2 w-10 h-10 z-20"
          >
            <GroupSettingsIcon className="h-9 w-9"></GroupSettingsIcon>
          </Link>
        ) : (
          <></>
        )
      }
      additionalBottomText={
        newReports && isAdmin
          ? `${newReports} new ${newReports == 1 ? "report" : "reports"}`
          : ""
      }
    ></SquareButton>
  );
}
