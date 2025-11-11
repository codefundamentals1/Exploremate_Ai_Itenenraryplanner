
import { useContext, useEffect, useState } from "react";
import IternaryDataContext from "../../IternaryDataContext";

const Mainpage = () => {
  const itenaryData = useContext(IternaryDataContext);

 

  // console.log(itenaryData)

  if(!itenaryData.current) return <div>Not found</div>;

  return (
    
    <div className="flex flex-col gap-4 p-4 relative border-s border-gray-200 dark:border-gray-700 bg-gray-100 min-h-screen  ">
      <div className="font-bold">Here is your customized itenary:</div>
      <div className="whitespace-pre "  >
        {itenaryData.current.data}</div>
    </div>
    
    
  )

};

export default Mainpage;
