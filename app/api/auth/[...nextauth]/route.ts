import { db } from "@/db"
import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoolgleProvider from "next-auth/providers/google"
import type { Adapter } from "next-auth/adapters"




const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoolgleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

})

export { handler as GET, handler as POST }