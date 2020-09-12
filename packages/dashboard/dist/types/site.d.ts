import { Page } from "@prisma/client";
export default interface ISite {
    id: string;
    name: string;
    pages: Page[];
}
