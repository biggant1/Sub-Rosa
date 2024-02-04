import { usePathname, useSearchParams } from "next/navigation";

type paramsType = { groupId: string };

export default function SingleGroup({ params }: { params: paramsType }) {
  return <p>{params.groupId}</p>;
}
