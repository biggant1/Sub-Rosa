"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";
import { getRandomIntInclusive } from "../lib/shared";
import { redirect } from "next/navigation";

export default async function submitReportForm(
  anonTitle: string,
  anonBody: string,
  groupId: string
) {
  if (!anonTitle || !anonBody) return;
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id) return;

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
    include: {
      members: true,
    },
  });
  if (!group) return;
  if (!group.members.some((member) => member.id == session.user.id)) return;

  const uploadDate = new Date(
    Date.now() + getRandomIntInclusive(-3 * 1000 * 86400, 3 * 1000 * 86400)
  );
  const formattedDate = uploadDate.toISOString();

  const newGroup = await prisma.report.create({
    data: {
      title: anonTitle,
      body: anonBody,
      approximateDate: formattedDate,
      group: {
        connect: { id: groupId },
      },
    },
  });

  redirect(`/groups/${newGroup.groupId}`);
}
