import { NextPage, NextPageContext } from "next";
import ISite from "types/site";
interface IProps {
    site: ISite;
}
declare const SitesShowPage: NextPage<IProps>;
export declare function getServerSideProps(ctx: NextPageContext): Promise<{
    props: {
        site: (import(".prisma/client").Site & {
            pages: import(".prisma/client").Page[];
        }) | null;
    };
}>;
export default SitesShowPage;
