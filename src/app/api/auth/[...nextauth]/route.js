import nextAuth from "next-auth";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextResponse } from "next/server";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    callback: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("User signed in:", user);
            console.log("Account details:", account);
            console.log("Profile information:", profile);
            return true; // Return true to allow sign in
        },
    },

}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export default NextAuth(authOptions)