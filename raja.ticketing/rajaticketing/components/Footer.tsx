"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-darkgreen relative font-helvatica rounded-t-[100%]  max-w-[2000px] mx-auto w-full ">
      <div className="flex  text-white   left-0 w-[100%] h-[691px]  md:h-[650px]  justify-center items-end  ">
        <div className="absolute -top-16 left-0 right-0  flex items-center justify-center ">
          <div className="bg-cover w-[80%] lg:w-[75%] h-[230px] md:h-[335px] flex items-center justify-between flex-col relative">
            <img
              src="koba.jpg"
              alt="Your Image"
              className="w-full h-full absolute rounded-md pointer-events-none"
            />

            <div className=" z-0">
              <h2 className=" flex justify-center font-helvatica text-2xl  md:mt-10">
                NEWSLETER
              </h2>
              <h3 className="bold font-helvetica  md:text-xl  lg:text-4xl font-bold text-xs  w-full ">
                FOOTBAL LEAGUE TOURNAMENT
              </h3>
            </div>
            <div className="absolut  z-0 mb-12 w-full mt-5 space-y-5">
              <div className="flex items-center justify-center  ">
                <input
                  className=" absolute bg-transparent font-sans outline-none text-xs md:text-lg placeholder-white border-white border-[1px] pl-2 rounded-3xl text-white h-[44px] w-[70%] mr-16  lg:w-[35%]"
                  placeholder="Ton adresse E-mail "
                ></input>
                <button className="bg-darkgreen text-xs w-36 md:font-helvatica lg:ml-[30%] ml-[60%] relative  h-[44px] rounded-full hover:shadow-2xl">
                  Book Tickets
                </button>
              </div>
              <p className="flex items-center text-xs  justify-center ml-3 md:ml-0 font-helvetica  ">
                Nous respectons votreR vie privée, c'est pourquoi nous ne
                partageons jamais vos informations
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[75%]   flex sm:justify-between flex-col md:flex-row ">
          <div className="md:w-[32%]   font-helvetica space-y-1 md:space-y-5 ">
            <div className="w-[60%] pointer-events-none ">
              <Image
                src="/rajalogo.png"
                width={800}
                height={800}
                alt="rajalogo"
                className="bg-contain"
              ></Image>
            </div>
            <p className="font-helvetica text-sm lg:text-sm ">
              Lancée par le RAJA CLUB ATHLETIC, RCA.TICKETING.ma est une
              plateforme de billetterie nouvelle génération qui vous offre la
              possibilité de réserver et acheter en ligne des tickets pour les
              événements de votre choix.
            </p>
          </div>
          <div className=" md:w-[50%] lg:w-[30%]  text-xs w-full py-8 md:py-0 font-helvetica  space-y-1 md:space-y-7 lg:text-sm">
            <p>
              Boulevard Omar El Khayam - ex Mermoz, cplxe. Sportif Rca,
              Casablanca
            </p>
            <div className="flex flex-col">
              <p>0775 785 406 </p>
              <p>0522 259 954</p>
            </div>
            <div className="flex space-x-4 pointer-events-none">
              <Image src="/instagrame.svg" alt="" width={40} height={40} />
              <Image src="/facebook.svg" alt="" width={40} height={40} />
              <Image src="/link.svg" alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center w-[75%] text-xs m-auto py-2 md:py-8 text-white md:flex-row flex-col">
        <p>Copyright © 2023. Tous droits réservés Raja Ticketing</p>
        <ul className="flex md:gap-4 md:flex-row flex-col w-full md:w-auto">
          <Link className="cursor-pointer" href={"apropos"}>
            À propos
          </Link>
          <li>.</li>
          <li>Conditions d'utilisation</li>
          <li>.</li>
          <li>Politique de confidentialit</li>
          <li>.</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
}
