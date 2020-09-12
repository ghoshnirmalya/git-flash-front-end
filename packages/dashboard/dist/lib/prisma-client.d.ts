import { PrismaClient } from "@prisma/client";
declare const prisma: PrismaClient<import(".prisma/client").PrismaClientOptions, never>;
export interface Context {
    prisma: PrismaClient;
}
export declare function createContext(): Context;
export default prisma;
