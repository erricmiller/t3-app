import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "@/Providers/prisma";
import { usersValidations } from "@/validations/users";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import {compare, hash} from "bcrypt"

export const usersRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getUsers: publicProcedure.query(async () => {
    const data = await prisma.user.findMany();
    return data;
  }),


  isUserAuthentecated: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions)
    return session;
  }),

  addUser: publicProcedure.input(usersValidations).mutation(async (opts) => {
    try {
      const pass = await hash(opts.input.password,12)
      await prisma.user.create({
        data: {
          name: opts.input.name,
          email: opts.input.email,
          password: pass,
          gender: opts.input.gender,
          userRole: "Client",
        },
      });
      return true;
    } catch (error) {
      return error;
    }
  }),

  //   getAll: publicProcedure.query(({ ctx }) => {
  //     return ctx.prisma.example.findMany();
  //   }),

    // getSecretMessage: protectedProcedure.query(() => {
    //   return "you can now see this secret message!";
    // }),
});
