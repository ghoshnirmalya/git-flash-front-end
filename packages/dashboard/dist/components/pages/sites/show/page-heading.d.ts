import { FC } from "react";
import ISite from "types/site";
interface IProps {
    site: ISite;
    onOpen: () => void;
}
declare const PageHeading: FC<IProps>;
export default PageHeading;
