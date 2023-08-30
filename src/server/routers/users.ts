import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "@/Providers/prisma";
import { usersValidations } from "@/validations/users";

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

  addUser: publicProcedure.input(usersValidations).mutation(async (opts) => {
    try {
      await prisma.user.create({
        data: {
          name: opts.input.name,
          email: opts.input.email,
          password: opts.input.password,
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

  //   getSecretMessage: protectedProcedure.query(() => {
  //     return "you can now see this secret message!";
  //   }),
});
