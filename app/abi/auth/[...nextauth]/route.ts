import bcrypt from 'bcrypt';
import NextAuth, {AuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvoder from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/app/libs/prismadb'

export const authOptions:AuthOptions = {
  adapter:PrismaAdapter(prisma),
  providers:[
    GithubProvider({
        clientId:process.env.GITHUB_ID as string,
        clientSecret:process.env.GITHUB_SECRET as string,
    }), 
    GoogleProvoder({
        clientId:process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }), 
    CredentialsProvider({
        name:'credentials',
        credentials:{
            email:{label:'email', type:'text'},
            password:{label:'password', type:'password'}
        }, async authorize(credentials) {
            if(!credentials?.email || !credentials?.password){
                throw new Error('Invalid Credentials')
            }
            const user =await prisma.user.findUnique({where:{}})
        }
    })
  ]
}
