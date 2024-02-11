import { NextAuthOptions } from "next-auth";
import colors from "tailwindcss/colors";

export const partialAuthOptions: NextAuthOptions = {
  providers: [],
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.sub,
          ...session.user,
        },
      };
    },
  },
  theme: {
    brandColor: colors.rose[100],
    colorScheme: "light",
    logo: "/logo_large.png",
  },
  session: {
    strategy: "jwt",
  },
};
