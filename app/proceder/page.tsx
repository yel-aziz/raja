"use client";
import Reservation from "@/components/reservation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Proceder() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [fullname, Setfullname] = useState("");
  const [Cin, SetCin] = useState("");
  const [NumeroCarte, SetNumeroCarte] = useState("");

  const handlechangeEmail = (event: any) => {
    SetEmail(event.target.value);
  };
  const handlechangePassword = (event: any) => {
    SetPassword(event.target.value);
  };
  const handlechangeFullname = (event: any) => {
    Setfullname(event.target.value);
  };
  const handlechangeCin = (event: any) => {
    SetCin(event.target.value);
  };

  const handlechangeNumeroCarte = (event: any) => {
    SetNumeroCarte(event.target.value);
  };

  const [alreadyuser, setAlreadyUser] = useState(true);
  const [seconds, setSeconds] = useState(20 * 60); // write the minutes  left in the place of 20
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  return (
    <div className="w-full min-h-screen max-w-[1440px] mx-auto  bg-blackgreen">
      <div className="w-full bg-darkgreen flex justify-center ">
        <div className=" h-20 w-[80%] items-center text-white flex justify-between">
          <Link
            className="flex gap-4 items-center md:p-2 md:px-4 md:bg-blackgreen rounded-full"
            href="/match"
          >
            <div className="h-[10px] w-[10px] ">

            <Image src="/Vector.png" width={10} height={10} alt="/" className="w-full h-full object-contain" />
            </div>
            <span className="hidden md:block ">RETOUR</span>
          </Link>
          <div className=" md:text-lg text-sm font-helvatica ">RCA VS FAR</div>
          <div className="flex flex-col font-bold items-center  ">
            <span className="md:text-2xl text-sm ">{displayMinutes}:{displaySeconds}</span>
            <span className="text-xs  ">Minutes restantes</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center  text-xs md:text-base">
        <div className="flex w-[80%] flex-col md:flex-row justify-between m-10">
          <div className="flex flex-col md:w-[65%] b">
            <div className="flex flex-col h-[232px]  bg-darkgreen">
              <div className="flex md:text-xl  h-16 w-full border-b border-white border-opacity-[50%]">
                <div
                  className={`flex items-center ${
                    alreadyuser ? "border-b-4" : "text-white text-opacity-[50%]"
                  } justify-center text-white font-helvatica w-[50%] h-16`}
                  onClick={() => {
                    setAlreadyUser(true);
                  }}
                >
                  <p className="text-opacity-0 ml-5 ">Tu as déja un compte</p>
                </div>
                <div
                  className={` flex items-center justify-center ${
                    alreadyuser ? "text-white text-opacity-[50%]" : "border-b-4"
                  } text-white font-helvatica w-[50%]  h-16 `}
                  onClick={() => {
                    setAlreadyUser(false);
                  }}
                >
                  <p>Inscriez-vous</p>
                </div>
              </div>
              <div className="flex justify-center flex-col h-full items-center">
                <div className="w-[95%] h-[80%] flex flex-col justify-between ">
                  <div className="h-[80%] flex flex-col md:flex-row justify-between ">
                    <input
                      type="text"
                      placeholder="Adresse E-mail"
                      value={Email}
                      onChange={handlechangeEmail}
                      className="h-[50%] md:w-[45%] w-full border-b text-white border-white border-opacity-[50%] bg-transparent placeholder-white placeholder-opacity-[50%] outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Mot de passe"
                      value={Password}
                      onChange={handlechangePassword}
                      className=" h-[50%] md:w-[50%] w-full border-b text-white  border-white border-opacity-[50%] outline-none bg-transparent  placeholder-white placeholder-opacity-[50%]"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between">
                    <p className="md:border-b text-white border-white border-opacity-[50%] h-6  text-opacity-[50%]  md:mt-0 mt-1">
                      Mot de passe oublié?
                    </p>
                    <button className="bg-darkgreenlite shadow shadow-black transform active:scale-75 transition-transform text-white p-3 px-7 placeholder-white placeholder-opacity-[50%] font-helvatica text-xs rounded-full">
                      CONNEXION
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between  w-full h-[294px] bg-darkgreen mt-10">
              <div className="w-full flex flex-col justify-between m-5">
                <div className=" h-auto text-white border-b  border-white border-opacity-[50%]">
                  <p className="font-helvatica text-2xl">Achteur</p>
                  <p className="text-xs mb-2 md:mb-5">
                    Veuillet renseigner les informations de la personne qui va
                    récupérer les tickets
                  </p>
                </div>
                <div className="h-[30%] flex flex-col md:flex-row justify-between ">
                  <input
                    type="text"
                    placeholder="Nom et prènom"
                    value={fullname}
                    onChange={handlechangeFullname}
                    className="h-[80%] md:w-[45%] w-full border-b text-white border-white border-opacity-[50%]  bg-transparent placeholder-white placeholder-opacity-[50%] outline-none"
                  />

                  <input
                    type="text"
                    placeholder="CIN"
                    value={Cin}
                    onChange={handlechangeCin}
                    className=" h-[80%] md:w-[50%] w-full border-b text-white border-white border-opacity-[50%] outline-none bg-transparent placeholder-white placeholder-opacity-[50%]"
                  />
                </div>
                <div className="bg-white bg-opacity-[48%] h-auto mb-5 text-xs md:text-base mt-1 text-red ">
                  La personne doit se munir avec le reçu de paiement et la carte
                  physique (nom photocopie) reseigne au moment de l’achat .
                </div>
              </div>
            </div>
            <div className="h-auto bg-darkgreen mt-10 mb-10">
              <div className="m-5 h-auto text-white border-b  border-white border-opacity-[50%]">
                <p className="font-helvatica text-2xl">Numéro votre carte</p>
                <p className="text-xs mb-2 md:mb-5">
                  Veuillet saisir le numéro de carte RAJAWI
                </p>
              </div>
              <div className="flex justify-between m-5 items-center flex-col lg:flex-row">
                <div className="flex  w-full lg:w-[60%] justify-between gap-2 border-b  border-white border-opacity-[50%]">
                  <input
                    type="text"
                    placeholder="************"
                    value={NumeroCarte}
                    onChange={handlechangeNumeroCarte}
                    className="outline-none placeholder-white h-10 w-full text-white bg-transparent"
                  />
                  <div className="w-[28px] h-[28px]">
                    <Image
                      src="/tick.png"
                      alt=""
                      width={300}
                      height={502}
                      className="bg-cover"
                    />
                  </div>
                </div>
                <button className="bg-darkgreenlite transform active:scale-75 transition-transform shadow shadow-black text-white p-2 px-14 placeholder-white placeholder-opacity-[50%] font-helvatica mt-5 rounded-full">
                  verrify
                </button>
              </div>
            </div>
          </div>

          <Reservation
            prix="150"
            nbrtickets="16"
            adresse="Complexe Med V, Casablanca"
            zone="5"
            date="Dim 13 Juin 21"
            heure="21:00"
            match="RAJA VS RAC"
          />
        </div>
      </div>
    </div>
  );
}
