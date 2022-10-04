import { useRef } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:4040";

export const useAPI = () => {
  const apiRef = useRef(axios.create({ baseURL: API_BASE_URL }));

  apiRef.current.interceptors.request.use((config) => {
    return config;
  });

  return apiRef.current;
};
