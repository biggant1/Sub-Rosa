import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { prisma } from "./db";
import { partialAuthOptions } from "./partialAuthOptions";

export const authOptions: NextAuthOptions = {
  ...partialAuthOptions,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? "",
    }),
    Discord({
      clientId: process.env.DISCORD_OAUTH_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_OAUTH_CLIENT_SECRET ?? "",
    }),
  ],
};
