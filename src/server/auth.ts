import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//     // Seconds - How long until an idle session expires and is no longer valid.
//     maxAge: 24 * 60 * 60, // 24 hours
//   },
  providers: [
    GitHubProvider({
        clientId:process.env.GITHUB_ID as string,
        clientSecret:process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email", placeholder: "test@test.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()

        const user = {id:"1",name:"Fahad",email:"fahad@test.com", password:"123456789"}
        return user

        // if(credentials?.email === user.email && credentials?.password === user.password){
        //     return user
        // }else {
        //     return null
        // }
    
          // If no error and we have user data, return it
        //   if (res.ok && user) {
        //     return user
        //   }
          // Return null if user data could not be retrieved
          return null
        }
      })
  ],
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error", // Error code passed in query string as ?error=
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//     newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
//   },
};
