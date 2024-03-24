import { User } from "src/types/user"

export const authConfig = {
  pages: {
    signIn: "/login"
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      
      if (user) {
        token.user = user
      }

      return token
    },
    async session({ session, token }) {
      session.user = token.user as User

      return session
    },
    async authorized({ auth, request }) {
      const user = auth?.user

      if (request.nextUrl?.pathname.startsWith("/admin") && !user?.isAdmin) {
        return false
      }

      if (request.nextUrl?.pathname.startsWith("/login") && user) {
        return Response.redirect(new URL("/", request.nextUrl))
      }

      return true
    }
  }
}