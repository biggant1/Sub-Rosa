import { Baloo_Chettan_2 } from "next/font/google";
import type { ReactNode } from "react";

const baloo = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function Button({
  className = "",
  height = "6rem",
  children,
}: {
  className?: string;
  height?: string;
  children?: ReactNode;
}) {
  return (
    <button
      className={`${className} w-[80%] bg-rose-950 rounded-3xl text-white text-4xl text-ellipsis uppercase whitespace-nowrap overflow-hidden px-6 ${baloo.className}`}
      style={{ height: height, minHeight: height }}
    >
      {children}
    </button>
  );
}
