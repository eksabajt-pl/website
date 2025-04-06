import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
//import { SupabaseAdapter } from "@auth/supabase-adapter";

export const { auth, signIn, handlers, signOut } = NextAuth({
  providers: [
    GitHub,
    /*Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        const response = await fetch(request);
        if (!response.ok) return null;
        return (await response.json()) ?? null;
      },
    }),*/
  ],
  /*adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),*/
});
