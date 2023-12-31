import { appRouter } from "@/server/root";
import { httpBatchLink } from "@trpc/client";

export const trpcServer = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});