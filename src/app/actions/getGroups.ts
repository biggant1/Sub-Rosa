"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";

export default async function getGroups() {
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return [];

  const groups = await prisma.group.findMany({
    include: {
      members: {
        where: {
          id: session.user.id,
        },
        select: {
          id: true,
        },
      },
      owners: {
        select: {
          id: true,
        },
      },
    },
  });

  return groups.map((group) => ({
    id: group.id,
    name: group.name,
    isOwner: group.owners.some((owner) => owner.id == session.user.id),
  }));
}
