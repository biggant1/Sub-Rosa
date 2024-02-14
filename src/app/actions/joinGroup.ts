"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { redirect } from "next/navigation";
import { prisma } from "../lib/db";

const response = {
  error: true,
  errorMsg: "",
};

export default async function joinGroup(joinId: string) {
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id)
    return { ...response, errorMsg: "invalid user id" };

  const group = await prisma.group.findUnique({
    where: {
      joinId: joinId,
    },
  });
  if (!group)
    return {
      ...response,
      errorMsg: `group with joinid (${joinId}) does not exist`,
    };

  await prisma.group.update({
    where: {
      id: group.id,
    },
    data: {
      members: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });

  redirect(`/groups/${group.id}`);
  return { ...response, error: false };
}
