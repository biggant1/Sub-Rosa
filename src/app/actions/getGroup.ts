"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";

export type group = { name: string; id: string; isOwner: boolean };

export default async function getGroup(groupId: string) {
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return;

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
    select: {
      owners: {
        select: {
          id: true,
        },
      },
      name: true,
      id: true,
    },
  });
  if (!group) return;

  return {
    name: group.name,
    id: group.id,
    isOwner: group.owners.some((owner) => owner.id === session.user.id),
  };
}
