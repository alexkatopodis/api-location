import { useEffect, useState } from "react";
import { useLocation } from "./hooks/useLocation";

const App = () => {
  const { data, fetch } = useLocation();
  const [locations, setLocations] = useState()

  const handleApi = () => {
    fetch({
      start: 0,
      limit: 100,
    });  
  };

  useEffect(() => {
    if(data?.data.result) setLocations(data?.data.result)
  }, [data?.data.result])
  console.log(locations)
  return (
    <div className="App">
      <button onClick={() => handleApi()}>CHAMA API</button>
    </div>
  );
};

export default App;
