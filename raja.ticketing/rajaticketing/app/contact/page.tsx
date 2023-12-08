"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [Nom, SetNom] = useState("");
  const [Prenom, SetPrenom] = useState("");
  const [Email, SetEmail] = useState("");
  const [Telephone, SetTelephone] = useState("");
  const [Aide, SetAide] = useState("");

  const handleChangeEmail = (event: any) => {
    SetEmail(event.target.value);
  };
  const handleChangeNom = (event: any) => {
    SetNom(event.target.value);
  };
  const handleChangePrenom = (event: any) => {
    SetPrenom(event.target.value);
  };
  const handleChangeTelephone = (event: any) => {
    SetTelephone(event.target.value);
  };
  const handleChangeAide = (event: any) => {
    SetAide(event.target.value);
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center ">
      <p className="text-white text-2xl font-helvatica  mt-10">
        CONTACTEZ-NOUS
      </p>

      <div className="flex text-white w-[80%] items-center flex-col md:flex-row justify-center mt-10 ">
        <div className="flex  md:w-[384px]  flex-col items-center gap-2 ">
          <div className="w-[36px] h-[36px] ">
            <Image
              src="/localisationcontact.png"
              alt="/"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
          <p className=" font-thin  md:w-[306px] w-auto ">
            Boulevard Omar El Khayam - ex Mermoz, cplxe. Sportif Rca, Casablanca
          </p>
        </div>
        <div className="flex  md:w-[384px]  flex-col items-center gap-2 ">
          <div className="w-[36px] h-[36px] ">
            <Image
              src="/instagrame.png"
              alt="/"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
          <p className=" font-thin   ">raja.ticketing.ma</p>
        </div>
        <div className="flex  md:w-[384px]  flex-col items-center gap-2 ">
          <div className="w-[36px] h-[36px] ">
            <Image
              src="/phonecontact.png"
              alt="/"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
          <p className=" font-thin   w-auto ">0775 785 406 - 0522 259 954</p>
        </div>
      </div>
      <div className="lg:w-[800px] w-[80%]  h-[633px] relative mt-10  bg-darkgreen mb-10 ">
        <div className=" flex  justify-center items-center m-5 gap-3 border-b border-white border-opacity-[50%] h-[50px]">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/user.png"
              alt="/"
              width={1000}
              height={1000}
              className="object-contain w-full h-full"
            />
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
            placeholder="Nom"
            value={Nom}
            onChange={handleChangeNom}
          ></input>
        </div>
        <div className=" flex  justify-center items-center m-5 gap-3 border-b  border-white border-opacity-[50%] h-[50px]">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/user.png"
              alt="/"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
            placeholder="Prénom"
            value={Prenom}
            onChange={handleChangePrenom}
          ></input>
        </div>
        <div className=" flex  justify-center items-center m-5 gap-3 border-b  border-white border-opacity-[50%] h-[50px]">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/email.png"
              alt="/"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
            placeholder="E-mail"
            value={Email}
            onChange={handleChangeEmail}
          ></input>
        </div>
        <div className=" flex  justify-center items-center m-5 gap-3 border-b  border-white border-opacity-[50%] h-[50px]">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/call.png"
              alt="/"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
            placeholder="Téléphone"
            value={Telephone}
            onChange={handleChangeTelephone}
          ></input>
        </div>
        <div className=" flex flex-col  m-5 gap-3 border-b  border-white border-opacity-[50%]">
          <div className="flex items-center gap-4 w-[16px] h-[16px]">
            <Image
              src="/aide.png"
              alt="/"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-sm text-white text-opacity-[50%]">Aide</p>
          </div>
          <textarea className="h-[111px] w-full break-words  resize-none bg-transparent text-white outline-none  " value={Aide} onChange={handleChangeAide}/>
        </div>
        <div className="flex w-full gap-3">
          <input type="checkbox" className="lg:w-14 w-7 ml-5 lg:ml-0 "></input>
          <p className="text-white text-opacity-[50%]">
            {" "}
            j accepte tous les conditions
          </p>
        </div>
        <div className="flex items-center w-full justify-center mt-10 ">
          <button className="bg-darkgreenlite p-2 shadow-2xl text-white rounded-full lg:w-60 w-52 transform active:scale-75 transition-transform">
            ENVOYER{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
