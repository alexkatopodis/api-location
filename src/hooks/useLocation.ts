import { useState, useCallback } from "react";
import { useAPI } from "./useApi";
import { AxiosResponse } from "axios";

export const useLocation = () => {
  const api = useAPI();
  const [data, setData] = useState<AxiosResponse>();
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(
    (body = {}) => {
      setLoading(true);
      const fetchData = async () => {      
        const values = await api.get("/api", body);
        setData(values);
        setLoading(false);
      };
      fetchData();
    }, 
    [api]
  );
  // useEffect(() => {
  //   setLoading(!loading)
  // },[data])

  return { isLoading: loading, data, fetch };
};
