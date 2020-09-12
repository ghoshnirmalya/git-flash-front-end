declare const sendDataToDB: (image: any, page: {
    id: string;
    url: string;
}, browser: string) => Promise<void>;
export default sendDataToDB;
