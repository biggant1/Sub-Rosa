import { ReactNode } from "react";

export function IconedCard({
  title,
  icon,
  className,
  children,
}: {
  title: string;
  icon: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col justify-center w-[22vw] bg-rose-900 h-4/5 rounded-[60px] overflow-hidden ${className}`}
    >
      <div className="flex justify-center items-center self-start gap-3 pt-6 w-full h-24 flex-initial">
        {icon}
        <h1 className="text-rose-100 text-3xl w-32">{title}</h1>
      </div>
      <div className="pt-8 flex flex-col items-center gap-6 flex-1 overflow-y-auto pb-8 no-scrollbar relative">
        {children}
      </div>
    </div>
  );
}
