import { useState, useCallback } from "react";
import { useAPI } from "./useApi";
import { AxiosResponse } from "axios";

export const useLocation = () => {
  const api = useAPI();
  const [data, setData] = useState<AxiosResponse>();
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const values = await api.get("/api");
        setData(values);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);

  return { isLoading: loading, data, fetch };
};
