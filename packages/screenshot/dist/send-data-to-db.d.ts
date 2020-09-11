declare const sendDataToDB: (image: any, page: {
    id: string;
    url: string;
}, browser: string) => Promise<{
    screenshot: any;
}>;
export default sendDataToDB;
