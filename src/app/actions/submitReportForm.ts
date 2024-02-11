"use server";

import { getServerSession } from "next-auth";
import { partialAuthOptions } from "../lib/partialAuthOptions";
import { prisma } from "../lib/db";
import { getRandomIntInclusive } from "../lib/shared";
import { redirect } from "next/navigation";

const response = {
  error: true,
  errorMsg: "",
};

export default async function submitReportForm(
  anonTitle: string,
  anonBody: string,
  groupId: string
) {
  if (!anonTitle || !anonBody)
    return { ...response, errorMsg: "invalid title or body" };
  const session = await getServerSession(partialAuthOptions);
  if (!session || !session.user.id)
    return { ...response, errorMsg: "invalid session" };

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
    include: {
      members: true,
    },
  });
  if (!group) return { ...response, errorMsg: "invalid group id" };
  if (!group.members.some((member) => member.id == session.user.id))
    return { ...response, errorMsg: "user is not a member of the group" };

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
  return { error: false, errorMsg: "" };
}
