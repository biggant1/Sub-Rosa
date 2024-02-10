import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import colors from "tailwindcss/colors";

const authOptions: AuthOptions = {
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return "/dashboard";
    },
  },
  theme: {
    brandColor: colors.rose[100],
    colorScheme: "light",
    logo: "/logo_large.png",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
