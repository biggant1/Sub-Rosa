import SideBar from "@/components/shared/SideBar";
import Heading from "@/components/groups/Heading";
import CreateGroupForm from "./CreateGroupForm";
import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { partialAuthOptions } from "@/app/lib/partialAuthOptions";
import { FormHandler } from "@/app/lib/types";

const handleSubmit: FormHandler = async (formData) => {
  "use server";

  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return;

  const groupName = formData.get("groupName") as string;
  if (!groupName) return;

  const newGroup = await prisma.group.create({
    data: {
      name: groupName,
      owners: {
        connect: [{ id: session.user.id }],
      },
      members: {
        connect: [{ id: session.user.id }],
      },
    },
  });

  redirect(`/groups/${newGroup.id}`);
};

export default function Groups() {
  return (
    <main className="flex w-screen h-screen">
      <SideBar selected="groups"></SideBar>
      <div className="flex flex-col items-center justify-center flex-grow h-screen">
        <Heading title="Create a group"></Heading>
        <div className="items-start flex-grow w-full pl-14 pt-[14vmin]">
          <CreateGroupForm onSubmit={handleSubmit}></CreateGroupForm>
        </div>
      </div>
    </main>
  );
}
