import { ReactNode } from "react";
import Logo from "./Svgs/Logo";
import DashboardIcon from "./Svgs/DashboardIcon";
import GroupsIcon from "./Svgs/GroupsIcon";
import CreditsIcon from "./Svgs/CreditsIcon";
import SettingsIcon from "./Svgs/SettingsIcon";
import LogoutIcon from "./Svgs/LogoutIcon";

export type SelectedOptions = "dashboard" | "groups" | "credits" | "settings";

export default function SideBar({ selected }: { selected?: SelectedOptions }) {
  return (
    <nav className="flex flex-col items-center bg-rose-900 w-80 h-screen max-w-[20vw] sticky left-0 top-0">
      <Logo className="w-1/2 h-auto pt-2"></Logo>
      <div className="flex flex-grow flex-col items-center justify-between pt-12 w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <SideBarItem
            icon={<DashboardIcon />}
            text="DASHBOARD"
            selected={selected == "dashboard"}
          ></SideBarItem>
          <SideBarItem
            icon={<GroupsIcon />}
            text="GROUPS"
            selected={selected == "groups"}
          ></SideBarItem>
          <SideBarItem
            icon={<CreditsIcon />}
            text="CREDITS"
            selected={selected == "credits"}
          ></SideBarItem>
        </div>
        <div className="flex flex-col items-center gap-8 w-full pb-12">
          <SideBarItem
            icon={<SettingsIcon />}
            text="SETTINGS"
            selected={selected == "settings"}
          ></SideBarItem>
          <SideBarItem icon={<LogoutIcon />} text="LOGOUT"></SideBarItem>
        </div>
      </div>
    </nav>
  );
}

function SideBarItem({
  icon,
  text,
  selected = false,
}: {
  icon: ReactNode;
  text: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex flex-grow justify-start items-center gap-4 [&_svg]:h-12 w-[85%] ${
        selected ? "[&_path]:fill-rose-500" : ""
      }`}
    >
      <>{icon}</>
      <p
        className={`text-rose-100 ${selected ? "text-rose-500 font-bold" : ""}`}
        style={{ fontSize: "min(1.8rem, 1.5vmax)" }}
      >
        {text}
      </p>
    </div>
  );
}
