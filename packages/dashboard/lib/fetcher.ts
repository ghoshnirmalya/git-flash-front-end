const fetcher = async (url: string, method: string = "GET", body?: any) => {
  const params = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${process.env.API_URL}/${url}`, params);

  return response.json();
};

export default fetcher;
