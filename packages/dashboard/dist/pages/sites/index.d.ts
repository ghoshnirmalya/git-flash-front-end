import { NextPage } from "next";
import ISite from "types/site";
interface IProps {
    sites: ISite[];
}
declare const SitesIndexPage: NextPage<IProps>;
export declare function getServerSideProps(): Promise<{
    props: {
        sites: any;
    };
}>;
export default SitesIndexPage;
