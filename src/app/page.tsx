import LoginIcon from "@/components/svgs/LoginIcon";
import Logo from "@/components/svgs/Logo";
import Image from "next/image";

import { Gowun_Batang, Kodchasan } from "next/font/google";
import Link from "next/link";
const kodchasan = Kodchasan({ weight: "400", subsets: ["latin"] });
const gowun = Gowun_Batang({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-cente">
      <nav className="bg-[#A82D53] h-24 w-screen flex justify-between items-center">
        <Logo color="#FDA4AF" className="size-24 ml-24"></Logo>
        <Link
          href="/signup"
          className={`flex items-center gap-2 text-4xl mr-16 text-rose-300 ${kodchasan.className}`}
        >
          <LoginIcon></LoginIcon>
          SIGNUP
        </Link>
      </nav>
      <div className="flex w-screen flex-grow">
        <section className="basis-2/3 flex flex-col justify-center pl-24 mb-24">
          <h1 className={`${kodchasan.className} text-9xl text-rose-900 pb-8`}>
            Sub Rosa
          </h1>
          <h3 className="text-3xl text-rose-950">
            Anonymous reporting anonymized with AI.
          </h3>
          <h3 className="text-3xl text-rose-950">
            Share your thoughts, ideas, and concerns safely.
          </h3>
          <h2 className={`text-6xl text-rose-950 ${gowun.className} pt-24`}>
            Empower your voice.
          </h2>
        </section>
        <aside className="basis-1/3 content-center pr-12 min-h-[100%]">
          <Logo color="#C50D41" className="size-full max-w-[25vmax]"></Logo>
        </aside>
      </div>
    </main>
  );
}
