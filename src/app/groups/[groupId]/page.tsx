import Button from "@/components/Button";
import { IconedCard } from "@/components/IconedCard";
import SideBar from "@/components/SideBar";
import NewReportsIcon from "@/components/Svgs/NewReportsIcon";
import { Baloo_Chettan_2, Lexend } from "next/font/google";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
            className="h-[90%] mt-4"
            title="NEW REPORTS"
          >
            <Button>LOREM</Button>
            <Button>IPSUM</Button>
            <Button>TEST</Button>
          </IconedCard>
          <div className="flex flex-col items-center justify-center w-[40vw] bg-rose-900 h-[90%] rounded-[60px] gap-5 mt-4">
            <Link
              href={`/groups/${groupId}/create`}
              className="text-2xl text-rose-100"
            >
              test
            </Link>
            <Link
              href={`/groups/${groupId}/create`}
              className="text-2xl text-rose-100"
            >
              test
            </Link>
            <Link
              href={`/groups/${groupId}/create`}
              className="text-2xl text-rose-100"
            >
              test
            </Link>
            <Link
              href={`/groups/${groupId}/create`}
              className="text-2xl text-rose-100"
            >
              test
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
