import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import colors from "tailwindcss/colors";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
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
  theme: {
    brandColor: colors.rose[100],
    colorScheme: "light",
    logo: "/logo_large.png",
  },
  session: {
    strategy: "jwt",
  },
};
