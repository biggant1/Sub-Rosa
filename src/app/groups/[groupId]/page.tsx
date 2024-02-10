import { paramsType } from "@/app/lib/types";
import GroupAdmin from "./GroupAdmin";
import GroupMember from "./GroupMember";

const isAdmin = true;

export default function SingleGroup({ params }: { params: paramsType }) {
  return isAdmin ? (
    <GroupAdmin params={params} />
  ) : (
    <GroupMember params={params} />
  );
}
