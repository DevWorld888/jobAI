import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db";
import { users } from "@/db/schema/users"; // tu tabla

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
  async jwt({ token, account }) {
    if (account) {
      // Intenta leer el rol de la URL de callback, si existe
      let role = "seeker";
      if (account.callbackUrl) {
        try {
          const callbackUrl = typeof account.callbackUrl === "string" ? account.callbackUrl : "";
          const url = new URL(callbackUrl);
          role = url.searchParams.get("role") || "seeker";
        } catch {
          // Si la URL es inválida, usa el rol por defecto
          role = "seeker";
        }
      }

      // Busca el usuario en la base de datos
      const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => token.email ? eq(users.email, token.email) : undefined,
      });

      if (!existingUser) {
        // Si no existe, crea usuario con rol
        await db.insert(users).values({
          email: token.email!,
          name: token.name!,
          role,
        });
        token.role = role;
      } else {
        token.role = existingUser.role;
      }
    }
    return token;
  },

  async session({ session, token }) {
    // Asegura que session.user exista antes de asignar el rol
    if (session.user) {
      session.user.role = token.role;
    }
    return session;
  },
},
});

export { handler as GET, handler as POST };
