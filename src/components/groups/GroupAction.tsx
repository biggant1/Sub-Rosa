import { Baloo_Chettan_2 } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import ButtonGroupAction from "./ButtonGroupAction";

const balooReg = Baloo_Chettan_2({ weight: "400", subsets: ["latin"] });

export default function GroupAction({
  url,
  className = "",
  children,
  onClick,
}: {
  url: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <>
      {onClick ? (
        <ButtonGroupAction className={className} onClick={onClick}>
          {children}
        </ButtonGroupAction>
      ) : (
        <Link
          href={url}
          className={`w-[85%] text-5xl text-rose-100 flex items-center gap-6 ${className} ${balooReg.className}`}
        >
          {children}
        </Link>
      )}
    </>
  );
}
