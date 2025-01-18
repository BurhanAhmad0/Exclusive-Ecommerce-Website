import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

// Connecting Database
import { connectDB } from '@/db/dbConnect'

// Importing Schemas
import User from '@/app/models/user'

export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Connect to the database
        await connectDB()

        // Find the user by email
        const user = await User.findOne({ email: credentials.email })
        // console.log(user)

        if (!user) {
          throw new Error('No user found with this email')
        }

        // Verify the password (use hashing in real projects, like bcrypt)
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error('Invalid password')
        }

        // If successful, return the user object
        return {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
      }
    })
  ],
  pages: {
    logIn: '/app/auth/login',  // Point to your custom login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add the user id and other user info to the token
      if (user) {
        token.id = user.id;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token data to the session
      session.user.id = token.id;
      session.user.first_name = token.first_name;
      session.user.last_name = token.last_name;
      session.user.email = token.email;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user)

      // Check if user exists in the database
      await connectDB()
      const existingUser = await User.findOne({ email: user.email })

      // If user exists, return true
      if (existingUser) {
        return true
      }

      // If user does not exist, create a new user
      const newUser = new User({
        first_name: user.name.split(' ')[0],
        last_name: user.name.split(' ')[1],
        email: user.email,
        password: 'Password123'
      })
      await newUser.save();

      return true;
    }
  }
})

export { authOptions as GET, authOptions as POST }
