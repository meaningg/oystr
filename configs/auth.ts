import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
