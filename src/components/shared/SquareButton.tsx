import Link from "next/link";
import { Baloo_Chettan_2 } from "next/font/google";
import type { ReactNode } from "react";

const balooReg = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function SquareButton({
  mainText,
  to = "",
  additionalBottomText,
  additionalTopRight,
}: {
  mainText: string;
  to?: string;
  additionalBottomText?: string;
  additionalTopRight?: ReactNode;
}) {
  return (
    <div className="w-72 h-72 rounded-xl bg-rose-900 grid place-items-center relative">
      <Link
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"
        href={to}
      ></Link>
      <p className="pl-5 pr-5 mb-3 line-clamp-2 text-center text-ellipsis uppercase text-rose-100 text-3xl">
        {mainText}
      </p>
      {additionalTopRight}
      {additionalBottomText ? (
        <p
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-rose-100 text-xl ${balooReg.className}`}
        >
          {additionalBottomText}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
