import { PrismaClient } from "@prisma/client";

import { env } from "@/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;





// import { PrismaClient } from '@prisma/client'

// // use `prisma` in your application to read and write data in your DB

// const globalForPrisma = global as unknown as {prisma:PrismaClient}

// export const prisma = globalForPrisma.prisma || new PrismaClient({
//     log: ['query']
// })

// if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma
