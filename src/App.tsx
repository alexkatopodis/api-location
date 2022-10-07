import { useEffect, useState } from "react";
import { useLocation } from "./hooks/useLocation";
import Table from "./components/Table";

const App = () => {
  const [dataLocations, setDataLocations] = useState([]);

  const { data, fetch, isLoading } = useLocation();

  useEffect(() => {
    if (!data && dataLocations.length === 0) fetch();
    if (data?.status === 200 && dataLocations.length === 0) {
      const {
        data: {
          result: { locations },
        },
      } = data;
      setDataLocations(locations);
    }
    return;
  }, [data, dataLocations, fetch]);

  return (
    <>
      {isLoading && <h1>Loading....</h1>}
      {dataLocations.length > 0 && !isLoading && <Table {...dataLocations} />}
    </>
  );
};

export default App;
