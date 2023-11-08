import { useState, useEffect } from "react";
import axios from "../../axios.js";
import Table from "../../components/Table";

function Propsfunc() {
  const [data, setData] = useState([]);

 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");
        setData(response.data);
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h2>table</h2>
        <Table data={data} />
      </div>
    </>
  );
}

export default Propsfunc;
