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
    process.env.NODE_ENV === "production"
      ? "https://git-flash-dashboard.vercel.app/"
      : `${process.env.API_URL}/${url}`;

  const response = await fetch(apiEndpoint, params);

  return response.json();
};

export default fetcher;
