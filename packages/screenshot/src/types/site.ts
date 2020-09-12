import IPage from "types/page";

export default interface ISite {
  id: string;
  name: string;
  pages?: IPage[];
}
