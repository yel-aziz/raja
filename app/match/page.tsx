"use client";

import Prochainmatch from "@/components/Prochainmatch";
import Tickets from "@/components/Tickets";
import ModalVideo from "@/components/Videoplayer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMatches, setZones } from "../redux/matcheSlice";

export default function Match() {
  const [count, setCount] = useState(1);
  const [zones, setZoness] = useState([]);
  const [Title, setTitle] = useState([]);
  const [Times, setTime] = useState("");
  const Dispatch = useDispatch();

  useEffect(() => {
    const getMatch = async () => {
      try {
        const response = await axios.get(
          "https://apiraja.guichet.com/v1/matches"
        );

        Dispatch(setZones(response.data.matches[0].zones));
        Dispatch(setMatches(response.data.matches[0]));
        setZoness(response.data.matches[0].zones);
      } catch (err) {
        console.log(err);
      }
    };
    getMatch();
    const scrollToElement = () => {
      const container = document.getElementById("scrollContainer");
      const element = document.getElementById("scrollToElement");

      if (container && element) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: "smooth",
        });
      }
    };
    scrollToElement();
  });

  return (
    <div className="flex min-h-screen items-center justify-center text-white flex-col mb-10 ">
      <div className="md:mt-0 mt-32  ">
        <ModalVideo />
      </div>
      <div className="flex items-center justify-center mt-40 w-full">
        <Prochainmatch />
      </div>

      <div className="flex flex-col justify-center items-center w-[80%] max-w-[1440px] mx-auto mt-20 mb-20 z-0">
        <div className="flex flex-col font-helvetica items-center  mb-10 ">
          <p className="md:text-4xl text-sm font-helvatica ">
            PRENDRE RENDEZ-VOUS
          </p>
          <p className="text-xs m-2">TARIFICATION SIMPLE</p>
        </div>
        <div id="scrollContainer" className="w-[100%]  ">
          <div
            id="scrollToElement"
            className="flex lg:flex-wrap overflow-auto gap-5 lg:justify-center "
          >
            {zones.map((zone: any, index) => (
              <Tickets key={index} zone={zone.title} prix={zone.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
