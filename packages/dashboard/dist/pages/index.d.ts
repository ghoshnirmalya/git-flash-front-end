import { NextPage } from "next";
interface screenshot {
    id: string;
    image: string;
}
interface IProps {
    screenshots: screenshot[];
}
declare const IndexPage: NextPage<IProps>;
export declare function getStaticProps(): Promise<{
    props: {
        screenshots: import(".prisma/client").Screenshot[];
    };
}>;
export default IndexPage;
