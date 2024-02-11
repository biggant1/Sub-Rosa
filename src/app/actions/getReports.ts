"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";

export default async function getReports(groupId: string) {
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return [];

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
    include: {
      owners: true,
    },
  });
  if (!group) return [];
  if (!group.owners.some((owner) => owner.id == session.user.id)) return [];

  const reports = await prisma.report.findMany({
    where: {
      groupId: groupId,
    },
  });

  return reports;
}
