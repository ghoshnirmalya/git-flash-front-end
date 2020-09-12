import fetch from "node-fetch";

const fetcher = async (url: string, method: string = "GET", body?: any) => {
  const params = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const apiEndpoint =
    process.env.NODE_ENV !== "development"
      ? `https://git-flash-dashboard.vercel.app/${url}`
      : `${process.env.API_URL}/${url}`;

  console.log("========== URL ==========");
  console.log(apiEndpoint);
  console.log("========== /URL ==========");

  const response = await fetch(apiEndpoint, params);

  return response.json();
};

export default fetcher;
