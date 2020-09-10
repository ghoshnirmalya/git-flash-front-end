import useSWR from "swr";
import fetcher from "lib/fetcher";

const useSite = (id: string = "") => {
  const { data, error } = useSWR(`/api/sites`, fetcher);

  return {
    sites: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSite;
