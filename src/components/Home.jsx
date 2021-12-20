import React, { useEffect, useState } from "react";
import Load from "./Load";
import Users from "./Users";

export default function Home() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log("Error is ", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) {
    return <Load />;
  }

  return <Users Data={Data} />;
}
