import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

const Citiescont = () => {
  const [cities, setcities] = useState([]);

  useEffect(() => {
    axios
      .get("/api/")
      .then((response) => {
        setcities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* 
      <h1>To show cites
      </h1>
      <p>JOKES : {cities.length}</p> */}

      <div className=" m-40 h-[300px] flex  justify-center items-center  ">
        {cities.map((city, index) => (
        
         
            <div  key={city.id} className="text-blue-500 ">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium    rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700   dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {city.cityname}
              </button>
            </div>
         
        ))}
      </div>
    </>
  );
};

export default Citiescont;
