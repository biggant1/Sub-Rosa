import joinGroup from "@/app/actions/joinGroup";
import { use } from "react";

export default function JoinGroup({ params }: { params: { joinId: string } }) {
  const response = use(joinGroup(params.joinId));

  return (
    <div className="w-screen h-screen grid place-items-center">
      <p className="text-4xl mb-[10%]">
        {response.error ? response.errorMsg : "Joining group..."}
      </p>
    </div>
  );
}
