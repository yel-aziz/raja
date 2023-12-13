"use client";

import Link from "next/link";
import { useState } from "react";

export default function Tickets({zone, NBplaces, prix}:any) {
  const [count, setCount] = useState(1);

  return (
    <div>

    <div className="bg-white h-[300px] w-[384px] py-8 rounded-lg">
      <div className="h-[64px] w-[139px]  bg-gradient-to-r  from-darkgreen to-green rounded-r-full flex justify-center  font-helvatica items-center text-2xl">
        {zone}
      </div>
      <p className="flex  justify-center items-center py-10 text-blackgreen  font-bold flex-col">
        <span className="text-5xl">{prix} dhs </span>
        <span className="text-sm">NB Places disponibles : {NBplaces}</span>
      </p>
      <div>
        <div className="text-greenf2 items-center flex justify-center text-2xl  border-greenf2">
          <button
            className="border border-greenf2  w-[40px] rounded-l-full h-[35px] flex justify-center items-center "
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <span className="border border-greenf2 w-[40px] h-[35px] flex justify-center items-center">
            {count}
          </span>
          <button
            className="border border-greenf2 w-[40px]  rounded-r-full h-[35px] flex items-center justify-center "
            onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
          >
            -
          </button>
          <Link key={2001} className="bg-darkgreen text-white text-lg rounded-full p-1 px-4 ml-3 hover:shadow-2xl " href="/proceder">
            PROCEDER
          </Link>
        </div>
      </div>
    </div>
    </div>

  );
}
