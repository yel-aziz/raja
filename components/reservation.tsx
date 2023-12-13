"use client";

import Image from "next/image";

export default function Reservation({
  match,
  adresse,
  date,
  heure,
  zone,
  nbrtickets,
  prix,
}: any) {
  return (
    <div className="h-[569px] md:w-[385px] relative font-helvatica flex justify-center  ">
      <div className="flex justify-between flex-col absolute w-[90%] h-full  text-white">
        <div>
          <div className="  mt-5 text-xs md:text-base   text-white h-10 w-full border-b  border-dashed border-y-greenf2">
            RÉSUMÉ DE LA RÉSERVATION
          </div>
          <div className="mt-1 w-[90%] text-white  ">
            MATCH
            <p className="text-xs text-yellow mt-1">{match} </p>
          </div>

          <div className="mt-5 w-[90%] text-white  ">
            ADRESSE
            <p className="text-xs text-yellow mt-1">{adresse}</p>
          </div>
          <div className="w-[90%] flex ">
            <div className="mt-5 w-[90%] text-white  ">
              DATE
              <p className="text-xs text-yellow mt-1">{date}</p>
            </div>
            <div className="mt-5 w-[90%] text-white  ">
              HEURE
              <p className="text-xs text-yellow mt-1">{heure} </p>
            </div>
          </div>
          <div className="w-[90%] flex ">
            <div className="mt-5 w-[90%] text-white  ">
              ZONE
              <p className="text-xs text-yellow mt-1">{zone} </p>
            </div>
            <div className="mt-5 w-[90%] text-white  ">
              NBR TICKETS
              <p className="text-xs text-yellow mt-1">x{nbrtickets}</p>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between flex-col h-[30%] mb-5">
          <div className=" w-[90%] text-white flex justify-between ">
            PRIX TOTAL
            <p className="md:text-xl text-yellow ">{prix} MAD</p>
          </div>
          <div className="flex justify-between gap-4 w-[90%] ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-8 h-8 text-darkgreen bg-gray-100 border-gray-300 rounded focus:ring-darkgreen dark:focus:darkgreen
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="text-xs text-white text-opacity-[80%]">
              J’ai lu les conditions générales de vente et j’y adhère sans
              réserve
            </p>
          </div>
          <button className="bg-darkgreenlite rounded-full p-2 md:p-3 text-xs  shadow-lg transform active:scale-75 transition-transform">
            PASSSER MA COMMANDE
          </button>
        </div>
      </div>

        <Image
          src="/zigzag.png"
          width={350}
          height={500}
          alt="/"
          className="absolute top-[58%]"
        />
        <Image
          src="/Subtract.png"
          width={596}
          height={385}
          alt="/"
          className=""
        />
    </div>
  );
}
