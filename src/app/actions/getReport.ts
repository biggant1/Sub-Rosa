"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";

type report = {
  id: string;
  groupId: string;
  title: string;
  body: string;
  approximateDate: Date;
  groupName: string;
};

export default async function getReport(
  groupId: string,
  reportId: string
): Promise<report | undefined> {
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return;

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
    include: {
      owners: true,
    },
  });
  if (!group) return;
  if (!group.owners.some((owner) => owner.id == session.user.id)) return;

  const report = await prisma.report.findUnique({
    where: {
      id: reportId,
    },
  });
  if (!report) return;

  return { ...report, groupName: group.name };
}
