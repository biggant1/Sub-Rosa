import SideBar from "@/components/SideBar";
import EditIcon from "@/components/Svgs/EditIcon";
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
    <div className="w-72 h-72 rounded-xl bg-rose-900 grid place-items-center relative">
      <Link
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"
        href="/groups/groupID"
      ></Link>
      <p className="pl-5 pr-5 mb-3 line-clamp-2 break-all text-ellipsis uppercase text-rose-100 text-3xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae vero quo
        veritatis. Maiores praesentium esse minima deserunt blanditiis in
        laudantium.
      </p>
      <Link
        href="/groups/TODO/edit"
        className="absolute top-2 right-5 w-10 h-10 z-20"
      >
        <EditIcon></EditIcon>
      </Link>
      <p
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-rose-100 text-xl ${balooReg.className}`}
      >
        {newReports ? "" : `8 new ${newReports == 1 ? "report" : "reports"}`}
      </p>
    </div>
  );
}
