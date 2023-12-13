"use client";
import Image from "next/image";
import Counter from "./Counter";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Prochainmatch() {
  const [match, setMatch] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [time, setTime] = useState("");
  const [league, setLeague] = useState("");

  const router = useRouter();

  function redirection() {
    router.push("/match");
  }

  useEffect(() => {
    getMatch();
  }),
    [];

  async function getMatch() {
    const respons = await axios.get("https://apiraja.guichet.com/v1/matches");
    setMatch(respons.data.matches[0].title);
    setTime(respons.data.matches[0].startAt);
    setLocalisation(respons.data.matches[0].venue.title);
    setLeague(respons.data.matches[0].league.title);
  }

  const path = usePathname();
  return (
    <div className="flex items-center justify-center flex-col h-auto lg:h-[264px] w-[80%] lg:w-[90%]  relative bg-black max-w-[1440px] mx-auto ">
      <Image
        className=" absolute  bg-cover w-full h-full rounded-md"
        src="/koba.jpg"
        alt=""
        width={500}
        height={500}
        quality={100}
      />

      <div className="flex  items-center j md:mt-10  w-[90%] h-[30%] border-b gap-2 justify-between z-0 flex-col md:flex-row">
        <div className="flex justify-center md:items-start items-center flex-col  md:w-[50%]  h-full md:mb-8  text-sm text-[#0EC96A]">
          <span
            className={`font-helvatica mt-6 ${
              path == "/match" ? "hidden " : "block"
            }`}
          >
            PROCHAIN MATCH
          </span>
          <span
            className={`text-white font-helvatica  ${
              path == "/match"
                ? "md:text-3xl font-extrabold p-3 text-xl"
                : "text-2xl"
            }`}
          >
            {match}
          </span>
        </div>

        <div className="flex md:w-[70%] lg:w-[50%] mb-6 h-full font-helvatica gap-4  text-white flex-col lg:flex-row md:flex-row  text-xl md:text-2xl  items-center">
          <div className="flex ml-auto md:flex-row flex-col items-center font-extrabold  text-2xl gap-6 z-0">
            <Counter time={time} />
            <div
              className={`flex  w-[80%] items-center justify-center ${
                path == "/match" ? "hidden" : "block"
              }`}
            >
              <button
                className="bg-darkgreen rounded-full w-28 md:w-36 h-10 text-xs hover:shadow-2xl outline-none r"
                onClick={redirection}
              >
                BOOK TICKETS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  w-[90%]   items-center  md:h-24  flex mt-5 z-0 md:flex-row flex-col">
        <div className="flex flex-col md:flex-row md:gap-8 gap-5 font-helvatica">
          <div className="w-36 h-full text-xs flex  items-center  gap-3 ">
            <div className=" w-20 h-9 ">
              <Image
                src="/map.png"
                alt=""
                width={200}
                height={500}
                className="bg-contain pointer-events-none"
              />
            </div>
            <span>{localisation}</span>
          </div>
          <div className="w-36 h-full text-xs flex gap-3 items-center   ">
            <div className=" w-14 h-9 ">
              <Image
                src="/coupe.png"
                alt=""
                width={500}
                height={500}
                className="bg-contain pointer-events-none"
              />
            </div>
            <span>{league}</span>
          </div>
        </div>
        <div className="flex md:items-start md:ml-auto gap-2 lg:gap-4 mt-5 mb-5 pointer-events-none">
          <Image src="/facebook.png" width={40} height={40} alt="" />
          <Image src="/twitter.png" width={40} height={40} alt="" />
          <Image src="/pinterest.png" width={40} height={40} alt="" />
          <Image src="/google.png" width={40} height={40} alt="" />
          <Image src="/instagrame.png" width={40} height={40} alt="" />
        </div>
      </div>
    </div>
  );
}
