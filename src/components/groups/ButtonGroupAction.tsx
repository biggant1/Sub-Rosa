"use client";

import { Baloo_Chettan_2 } from "next/font/google";
import { ReactNode } from "react";

const balooReg = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function ButtonGroupAction({
  className,
  onClick,
  children,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`w-[85%] text-5xl text-rose-100 flex items-center gap-6 ${className} ${balooReg.className}`}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
