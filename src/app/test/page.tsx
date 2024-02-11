import { getServerSession } from "next-auth/next";
import { partialAuthOptions } from "../lib/partialAuthOptions";

export default async function Page() {
  const session = await getServerSession(partialAuthOptions);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
