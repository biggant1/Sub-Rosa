import Input from "@/components/shared/Input";
import { Baloo_Chettan_2, Kodchasan } from "next/font/google";
import Link from "next/link";

const kodchasan = Kodchasan({ weight: "400", subsets: ["latin"] });
const baloo = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function Signup() {
  return (
    <main className="w-screen h-screen flex">
      <div className="basis-4/6 flex flex-col items-center py-32 gap-5">
        <h1 className={`text-rose-900 text-8xl ${kodchasan.className}`}>
          Sub Rosa
        </h1>
        <div className="w-64 h-24 bg-blue-200 rounded-sm grid place-content-center mt-5">
          SIGN UP WITH GOOGLE
        </div>
        <hr className="w-80 border-none bg-rose-950 h-px my-8" />
        <Input
          type="email"
          placeholder="Email..."
          className={baloo.className}
        ></Input>
        <Input
          type="password"
          placeholder="Password..."
          className={baloo.className}
        ></Input>
        <button
          className={`w-64 h-12 bg-rose-300 rounded-xl mt-5 text-xl text-rose-950 ${baloo.className}`}
        >
          SIGN UP
        </button>
        <Link
          href="/login"
          className={`text-rose-950 text-xl mt-6 ${baloo.className}`}
        >
          If you already have an account,{" "}
          <span className="text-rose-600">login here!</span>
        </Link>
      </div>
      <aside className="basis-2/6 bg-rose-900 flex-grow"></aside>
    </main>
  );
}
