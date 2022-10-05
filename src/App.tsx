import { useEffect, useState } from "react";
import { useLocation } from "./hooks/useLocation";
import Table from "./components/Table";

const App = () => {
  const [dataLocations, setDataLocations] = useState([]);

  const { data, fetch } = useLocation();

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
    <div className="App">
      {dataLocations.length > 0 && <Table {...dataLocations} />}
    </div>
  );
};

export default App;
