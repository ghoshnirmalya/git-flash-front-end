import { FC } from "react";
import ISite from "types/site";
interface IProps {
    onClose: () => void;
    isOpen: boolean;
    site: ISite;
}
declare const AddPageModal: FC<IProps>;
export default AddPageModal;
