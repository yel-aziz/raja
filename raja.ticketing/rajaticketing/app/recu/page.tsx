"use client";
import Image from "next/image";
import React from "react";

export default function Recu() {


  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center items-center flex-col gap-5 mt-20 ">
        <div className="w-[62px] h-[62px]">
          <Image
            src="/paymentdone.png"
            alt="/"
            width={500}
            height={500}
            className=""
          />
        </div>
        <p className="text-white font-helvatica md:text-3xl text-xs ml-5">
          VOTRE PAIEMENT A ÉTÉ EFFECTUÉ AVEC SUCCÉS
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-20 m-20  ">
        <div
          id="content-to-convert"
          className="flex w-full flex-col items-center justify-center h-full  "
        >
          <div className="flex  flex-col text-black justify-between md:flex-row   md:w-[600px] md:h-[250px] w-[100px] h-[400px]  absolute  font-helvatica">
            <div className="  flex flex-col md:space-y-5 z-0  -black ">
              <div className="flex flex-col  ">
                <span className="text-black text-opacity-[50%]  font-helvatica font-bold ">
                  MATCH{" "}
                </span>
                <span className="text-greenf2 text-xs md:text-sm  ">
                  RCA VS FAR
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-black text-opacity-[50%]  font-helvatica font-bold ">
                  DATE{" "}
                </span>
                <span className="text-greenf2 text-xs md:text-sm font-helvatica ">
                  Dim 13 Juin 21
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-black text-opacity-[50%]  font-helvatica font-bold">
                  {" "}
                  HEURE
                </span>
                <span className="text-greenf2 text-xs md:text-sm ">19:00</span>
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-black text-opacity-[50%] font-helvatica font-bold">
                  ADRESSE{" "}
                </span>
                <span className="text-greenf2 font-helvatica text-xs md:text-sm ">
                  Complexe Med V, Casablanca
                </span>
              </div>
            </div>
            <div className=" md:w-[50%] md:space-y-5  -black md:mt-0">
              <div className="flex flex-col md:ml-5 ">
                <div className="flex flex-col">
                  <p className="text-black text-opacity-[50%] font-helvatica font-bold">
                    NBR TICKETS
                  </p>
                  <p className="text-greenf2 ">x3</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-black text-opacity-[50%]  font-helvatica font-bold">
                    ZONE
                  </p>
                  <p className="text-greenf2 ">5</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-black text-opacity-[50%]  font-helvatica font-bold">
                    PRIX TOTAL
                  </p>
                  <p className="text-greenf2 text-lg font-helvatica">150 MAD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[650px] h-[322px] md:block hidden ">
            <Image
              src="/paymentfacture.png"
              alt=""
              height={900}
              width={900}
              className="bg-cover    "
            />
          </div>
          <div className="md:hidden   w-[200px] h-[500px] ">
            <Image
              src="/facturerotate.png"
              alt=""
              height={500}
              width={500}
              className="object-contain h-full w-full"
            />
          </div>
        </div>

        <div className="text-white  text-xs md:text-base font-helvatica">
          <button
            id="convert-button"
            className="bg-darkgreenlite p-5  transform active:scale-75 transition-transform w-60 md:w-auto rounded-full"
          >
            TÉLÉCHARGER MON REÇU
          </button>
        </div>
      </div>
    </div>
  );
}
