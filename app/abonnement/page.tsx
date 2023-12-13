"use client";

import Image from "next/image";
import { useState } from "react";

export default function Abonment() {
  const [Name, SetName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [DatedeNaisance, SetDatedeNaisance] = useState("");
  const [Countries, Setcountries] = useState("");
  const [Cin, SetCin] = useState("");
  const [Adresse, SetAdresse] = useState("");
  const [Telephone, SetTelephone] = useState("");
  const [Email, setEmail] = useState("");
  const [Zone, setZone] = useState("");
  const [Adressedelivraison, setadressedelivraison] = useState("");
  const [Picture, SetPicture] = useState("");

  const handleChange = (event: any) => {
    SetName(event.target.value);
  };
  const handleChangelastname = (event: any) => {
    SetLastName(event.target.value);
  };
  const handleChangeDatedeNaisance = (event: any) => {
    SetDatedeNaisance(event.target.value);
  };
  const handleChangeemail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangecountries = (event: any) => {
    Setcountries(event.target.value);
  };
  const handleChangecin = (event: any) => {
    SetCin(event.target.value);
  };

  const handleChangeadresse = (event: any) => {
    SetAdresse(event.target.value);
  };
  const handleChangeTelephone = (event: any) => {
    SetTelephone(event.target.value);
  };
  const handleChangezone = (event: any) => {
    setZone(event.target.value);
  };
  const handleAdresselivraison = (event: any) => {
    setadressedelivraison(event.target.value);
  };
  return (
    <div className=" flex flex-col items-center  max-w-[1440px] mx-auto">
      <div className="w-[80%] h-full  m-20">
        <div className="text-white space-y-5">
          <p className="text-3xl font-helvatica">ABONNEMENT 23/24</p>
          <p className="font-sans ">
            Abonnement aux matchs du Raja CA pour la saison 2023/2024  Profitez
            d un accès exclusif à tous les matchs à domicile et vivez chaque
            moment fort du club en direct depuis les tribunes. Avec votre carte
            d abonnement le stade devient votre deuxième chez-vous. Ne manquez
            pas une seule action, vivez l émotion du Raja à chaque instant
            Rejoignez la communauté des supporters les plus passionnés et
            montrez votre soutien inconditionnel au club. Abonnez-vous dès
            maintenant pour une saison de football mémorable avec le Raja 
          </p>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row  h-full mt-10 text-white">
          <div className="flex justify-center items-center lg:w-[592px] w-full  bg-darkgreen">
            <div className="m-5 w-[95%] ">
              <div className="h-[70px] border-b border-white border-opacity-[50%]">
                <span className="text-white text-2xl md:text-3xl font-bold">
                  Formulaire de souscription
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-start items-center gap-10 w-full mt-10">
                <div className="flex gap-5 flex-col  items-center  justify-center w-[161px] h-[151px] ">
                  <div className="w-[70px]  h-[70px] rounded-full relative bg-white ">
                    <Image
                      src="/usericon.png"
                      className="object-contain absolute pointer-events-none"
                      quality={100}
                      width={500}
                      height={500}
                      alt=""
                    />
                    <label
                      className=" w-6 h-15  absolute right-0 top-0"
                      id="custome"
                    >
                      <Image
                        src="/pen.png"
                        alt=""
                        className="object-contain w-full h-full pointer-events-none"
                        quality={100}
                        width={500}
                        height={500}
                      />
                      <input
                        type="file"
                        accept=""
                        id="custome"
                        className="hidden "
                      />
                    </label>
                  </div>
                  <button className="h-[46px] w-full bg-darkgreenlite rounded-full text-white flex items-center justify-center">
                    <label>
                      <input
                        type="file"
                        accept=""
                        id="custome"
                        className="hidden"
                      />
                      <p>Ajouter une photo*</p>
                    </label>
                  </button>
                </div>
                <div className=" md:w-[70%] relative text-white text-opacity-[50%] ">
                  <div className="flex flex-col ">
                    <div className="flex gap-2">
                      <p>.</p>
                      <p>
                        La tête doit être centrée et encadrée comme dans
                        l exemple ci-dessous
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p>.</p>
                      <p> La photo doit être en couleur</p>
                    </div>
                    <div className="flex gap-2">
                      <p>.</p>
                      <p>
                        Le fond doit être de couleur unie, de préférence Blanc
                        gris clair ou bleu clair ou blanc
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none">
                    <Image src="/position.png" alt=""  quality={100}
                      width={200}
                      height={200}/>
                  </div>
                </div>
              </div>

              <div className="w-full flex-wrap flex justify-between gap-1 gap-y-10 mt-5">
                <input
                  placeholder="Prénom*"
                  value={LastName}
                  onChange={handleChangelastname}
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <input
                  value={Name}
                  onChange={handleChange}
                  placeholder="Nom*"
                  className="h-[50px] w-[45%]   bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />

                <select
                  value={Countries}
                  onChange={handleChangecountries}
                  id="countries"
                  className=" w-[45%]   bg-transparent border-b border-opacity-[50%] border-white  outline-none"
                >
                  <option className="bg-darkgreen ">Sexe</option>
                  <option className="bg-darkgreen" value="Homme">
                    Homme
                  </option>
                  <option className="bg-darkgreen" value="Femmale">
                    Femmale
                  </option>
                </select>

                <input
                  value={DatedeNaisance}
                  onChange={handleChangeDatedeNaisance}
                  placeholder="Date de naissance"
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <input
                  value={Email}
                  onChange={handleChangeemail}
                  placeholder="E-mail*"
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <input
                  value={Cin}
                  onChange={handleChangecin}
                  placeholder="CIN"
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <input
                  value={Adresse}
                  onChange={handleChangeadresse}
                  placeholder="Adresse"
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <input
                  value={Telephone}
                  onChange={handleChangeTelephone}
                  placeholder="Téléphone*"
                  className="h-[50px] w-[45%]  bg-transparent border-b outline-none border-white border-opacity-[50%]"
                />
                <select
                  value={Zone}
                  onChange={handleChangezone}
                  id="countries"
                  className="w-[30%] bg-transparent border-white border-opacity-[50%] h-[50px] outline-none border-b"
                >
                  <option value="DEFAULT" className="bg-darkgreen">
                    Zone
                  </option>
                  <option className="bg-darkgreen" value="zone1">
                    Zone1
                  </option>
                  <option className="bg-darkgreen" value="zone2">
                    Zone2
                  </option>
                  <option className="bg-darkgreen" value="zone3">
                    Zone3
                  </option>
                  <option className="bg-darkgreen" value="zone4">
                    Zone4
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-[50%] h-[590px]  bg-darkgreen">
            <div className="w-[95%] h-[90%]  ">
              <div className="h-[70px]   border-b border-white border-opacity-[50%]">
                <p className="text-3xl font-bold">Livraison</p>
              </div>
              <div className="flex flex-col justify-between gap-5 mt-5">
                <div className="flex items-center  gap-5">
                  <input
                    type="checkbox"
                    className="w-[16px] h-[16px]"
                    required
                  />
                  <p>Livraison</p>
                </div>
                <div className="flex md:flex-row flex-col gap-5 justify-between h-[50px] ">
                  <input
                    placeholder="Adresse de Livraison "
                    value={Adressedelivraison}
                    onChange={handleAdresselivraison}
                    className="  w-[80%] bg-transparent border-b border-white border-opacity-[50%] outline-none"
                  />
                  <select
                    value={Zone}
                    onChange={handleChangezone}
                    id="countries"
                    className="w-[30%] bg-transparent border-white border-opacity-[50%] h-[50px] outline-none border-b"
                  >
                    <option value="DEFAULT" className="bg-darkgreen">
                      City
                    </option>
                    <option className="bg-darkgreen">CASABLANCA</option>
                    <option className="bg-darkgreen" value="zone1">
                      FES
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex ">
                <div className="h-[70px] w-full border-b border-white border-opacity-[50%] mt-10">
                  <p className="font-helvatica  text-2xl">Paiement</p>
                </div>
              </div>
              <div className="h-[80px]  mt-10">
                <div className="flex justify-between">
                  <p>Sous-total :</p>
                  <p className="text-yellow">70000 DH </p>
                </div>
                <div className="flex justify-between">
                  <p>Livraison :</p>
                  <p className="text-yellow">70000 DH </p>
                </div>
                <div className="flex justify-between">
                  <p>Total :</p>
                  <p className="text-yellow">70000 DH </p>
                </div>
              </div>
              <div className="flex items-center h-[20px]  mt-10 gap-3">
                <input type="checkbox" className="w-[16px] h-[16px]" required />
                <p className="text-white text-opacity-[50%]">
                  J’accepte sans réserve les conditions générales de vente
                </p>
              </div>
              <div className="flex justify-center items-center mt-7">
                <button className="w-[210px] h-[44px] bg-darkgreenlite rounded-full shadow-md font-helvatica text-sm transform active:scale-75 transition-transform">
                  {" "}
                  PASSER AU PAIEMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
