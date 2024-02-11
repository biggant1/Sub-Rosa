import { paramsType } from "@/app/lib/types";
import GroupAdmin from "./GroupAdmin";
import GroupMember from "./GroupMember";
import getGroup from "@/app/actions/getGroup";
import { use } from "react";

export default function SingleGroup({ params }: { params: paramsType }) {
  const group = use(getGroup(params.groupId));
  if (!group) return <></>;

  return group?.isOwner ? (
    <GroupAdmin group={group} />
  ) : (
    <GroupMember group={group} />
  );
}
