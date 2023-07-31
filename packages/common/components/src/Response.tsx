'use client';

import { useEffect } from "react";

const Response = () => {
  useEffect(() => {
    let res;
    async function fetchData() {
      res = fetch("http://127.0.0.1:8000/", {
        method: "GET",
      });
      console.log(await res);
    }
    fetchData();
  }, []);
  

  return(
    <div>Component that fetch from Django</div>
  );
};

export default Response;
