"use client";

import JoinUrlIcon from "../svgs/JoinUrlIcon";
import GroupAction from "./GroupAction";

export default function CopyJoinUrlButton({ joinId }: { joinId: string }) {
  return (
    <GroupAction
      url={``}
      onClick={() =>
        navigator.clipboard.writeText(
          `${window.location.host}/groups/join/${joinId}`
        )
      }
    >
      <JoinUrlIcon></JoinUrlIcon>
      COPY JOIN URL
    </GroupAction>
  );
}
