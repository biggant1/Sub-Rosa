"use client";

import { ReactNode } from "react";
import Logo from "@/components/svgs/Logo";
import DashboardIcon from "@/components/svgs/DashboardIcon";
import GroupsIcon from "@/components/svgs/GroupsIcon";
import CreditsIcon from "@/components/svgs/CreditsIcon";
import SettingsIcon from "@/components/svgs/SettingsIcon";
import LogoutIcon from "@/components/svgs/LogoutIcon";
import Link from "next/link";
import { doNothing } from "@/app/lib/shared";
import { signOut } from "next-auth/react";

export type SelectedOptions = "dashboard" | "groups" | "credits" | "settings";

export default function SideBar({ selected }: { selected?: SelectedOptions }) {
  return (
    <nav className="flex flex-col items-center bg-rose-900 w-80 h-screen flex-shrink-0 max-w-[20vw] sticky left-0 top-0">
      <Logo className="w-1/2 h-auto pt-2"></Logo>
      <div className="flex flex-grow flex-col items-center justify-between pt-12 w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <SideBarItem
            icon={<DashboardIcon />}
            text="DASHBOARD"
            to="/dashboard"
            selected={selected == "dashboard"}
          ></SideBarItem>
          <SideBarItem
            icon={<GroupsIcon />}
            text="GROUPS"
            to="/groups"
            selected={selected == "groups"}
          ></SideBarItem>
          <SideBarItem
            icon={<CreditsIcon />}
            text="CREDITS"
            to="/credits"
            selected={selected == "credits"}
          ></SideBarItem>
        </div>
        <div className="flex flex-col items-center gap-8 w-full pb-12">
          <SideBarItem
            icon={<SettingsIcon />}
            text="SETTINGS"
            selected={selected == "settings"}
          ></SideBarItem>
          <SideBarItem
            icon={<LogoutIcon />}
            text="LOGOUT"
            onClick={() => signOut({ callbackUrl: "/" })}
          ></SideBarItem>
        </div>
      </div>
    </nav>
  );
}

function SideBarItem({
  icon,
  text,
  to = "",
  onClick = doNothing,
  selected = false,
}: {
  icon: ReactNode;
  text: string;
  to?: string;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <Link
      href={to}
      className={`flex flex-grow justify-start items-center gap-4 [&_svg]:h-12 w-[85%] ${
        selected ? "[&_path]:fill-rose-500" : ""
      }`}
      onClick={onClick}
    >
      <>{icon}</>
      <p
        className={`text-rose-100 ${selected ? "text-rose-500 font-bold" : ""}`}
        style={{ fontSize: "min(1.8rem, 1.5vmax)" }}
      >
        {text}
      </p>
    </Link>
  );
}
