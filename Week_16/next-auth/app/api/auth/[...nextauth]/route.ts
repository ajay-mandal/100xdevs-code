import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import NextAuth from "next-auth"

// TO access the userID on both client and server components
const handler = NextAuth(NEXT_AUTH_CONFIG)

export { handler as GET, handler as POST }
