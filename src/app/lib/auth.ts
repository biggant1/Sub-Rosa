import { AuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import colors from "tailwindcss/colors";

export const authOptions: AuthOptions = {
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
};
