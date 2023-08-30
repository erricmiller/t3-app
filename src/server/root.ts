import { usersRouter } from "./routers/users";
import { publicProcedure, createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
    users: usersRouter,
})

export type appRouter = typeof appRouter;