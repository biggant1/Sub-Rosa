import { Lexend } from "next/font/google";
import { ReactNode } from "react";

const lexend = Lexend({ weight: "400", subsets: ["latin"] });

export default function Heading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="h-36 w-full flex items-center justify-between flex-shrink-0">
      <h1 className={`pl-12 text-rose-900 text-7xl ${lexend.className}`}>
        {title}
      </h1>
      {children}
    </div>
  );
}
