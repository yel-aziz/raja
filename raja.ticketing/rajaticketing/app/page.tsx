"use client";

import Cartes from "@/components/Cartes";
import Match from "@/components/Match";
import Partenair from "@/components/Partenair";
import Prochainmatch from "@/components/Prochainmatch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

type cartat = {
  id: number;
  title: string;
  description: string;
  price: number;
  slug: string;
  cover: string;
};

type matchtype = {
  id: number;
  cover: string;

  description: string;
  price: number;
  slug: string;
  venue: string;
  startAt: string;
  title: string;
};
export default function Home() {
  const [abon, setabon] = useState<cartat[]>([]);
  const [match, setMatch] = useState<matchtype[]>([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const Cards = await axios.get("https://apiraja.guichet.com/v1/cards/");
        setabon(Cards.data.cards);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, [match]);
  useEffect(() => {
    const getMatch = async () => {
      try {
        const response = await axios.get(
          "https://apiraja.guichet.com/v1/matches"
        );

        setMatch(response.data.matches);
        console.log(response.data.matches);
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
  }, []);

  useEffect(() => {
    const scrollToElement = () => {
      const container = document.getElementById("cartescontainer");
      const element = document.getElementById("carteelement");

      if (container && element) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: "smooth",
        });
      }
    };

    scrollToElement();
  }, [abon]);

  return (
    <div className=" flex h-full justify-center items-center flex-col w-[100%]   text-white  text-6xl  z-0  ">
      <div className="z-0 space-y-8 my-24 text-2xl md:text-6xl flex items-center justify-center flex-col ">
        <p className="  font-helvatica  ">BOOK YOUR</p>
        <p className="font-helvatica  ">
          TICKETS FOR <span className="text-[#0EC96A] ">RAJA</span>
        </p>
        <p className=" font-helvetica flex  justify-center font-helvatica text-xs md:text-lg ml-7">
          Safe, secure, reliable ticketing.Your ticket to live entertainment!
        </p>
      </div>

      <Prochainmatch />
      <div className="lg:w-[90%] w-[80%] h-full z-0 max-w-[1440px] mx-auto mt-16  hide-scrollbar ">
        <div className="W-full   h-auto text-3xl md:text-5xl font-helvatica">
          MATCH
          <p className="font-helvatica text-sm space-x-10 my-3">
            Domus Studiorum Seriis Cultibus
          </p>
        </div>
        <div
          id=" scrollContainer"
          className="flex gap-2  justify-center "
          style={{ whiteSpace: "nowrap" }}
        >
          <div
            id="scrollToElement"
            className="flex md:flex-row  w-full h-full gap-3 overflow-auto mt-8 hover:ease-out"
          >
             { match?.map((item, index) => (
              <Match
              key={index}
                match={item.title}
                localisation={item.venue?.title}
                time={item.startAt}
                cover={item.cover}
              />
            ))}
          
            
          </div>
        </div>
      </div>
      <div className="w-full h-[716px] z-0 bg-darkgreen mt-28  flex justify-center items-center font-helvatica">
        <div
          id="cartecontainer"
          className="lg:w-[90%] w-[80%] items-center text-3xl md:text-5xl  max-w-[1440px] mx-auto"
        >
          CARTES
          <p className="text-sm space-x-10 my-3 ">
            domus studiorum seriis cultibus
          </p>
          <div id="carteelement" className="flex gap-2 overflow-auto ">
            {abon.map((item, index) => (
              <Cartes
                key={item.price}
                image={item.cover}
                prix={item.price + " MAD"}
                ABONNEMENT={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Partenair />
    </div>
  );
}
