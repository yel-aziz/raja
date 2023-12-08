"use client";
import { useState } from "react";
import Profilesetting from "@/components/profileOptions/Profile";
import Commande from "@/components/profileOptions/mescommande";
import Mescartes from "@/components/profileOptions/mescartes";
import { useRouter } from "next/navigation";
import { setDeLogde } from "../redux/loginslice";
import Image from "next/image";

export default function Profile() {
  const [option, setOption] = useState("Profile");
  const router = useRouter();
  return (
    <div className=" h-full flex flex-col  items-center  mb-40  max-w-[1440px] mx-auto ">
      <div className=" w-[83%]  text-white">
        <div className="flex flex-col md:flex-row mt-5  ">
          <div className="flex flex-col items-center lg:w-[384px] md:w-[300px] md:h-[388px]   h-[290px]  bg-darkgreen  rounded-md">
            <div className="h-[76px] w-full bg-darkgreenlite text-white flex items-center  rounded-t-md  ">
              <p className="ml-5 font-helvatica text-xl ">MON COMPTE</p>
            </div>
            <div
              className={`flex justify-between flex-col w-[80%] h-[60%] md:mt-10 mt-5 gap-5   ${
                option == "Profile" ? "" : "text-opacity-[50%] "
              }  text-white `}
            >
              <div
                className="flex gap-2  cursor-pointer"
                onClick={() => {
                  setOption("Profile");
                }}
              >
                {option === "Profile" && (
                  <Image
                    src="/whiteicons/userwhite.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}
                {option !== "Profile" && (
                  <Image
                    src="/user.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}

                <span>Profile</span>
              </div>

              <div
                className={`flex gap-2 text-white cursor-pointer   ${
                  option == "Mes commandes" ? "" : "text-opacity-[50%] "
                }`}
                onClick={() => {
                  setOption("Mes commandes");
                }}
              >
                {option === "Mes commandes" && (
                  <Image
                    src="/whiteicons/boxwhite.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}
                {option !== "Mes commandes" && (
                  <Image
                    src="/commande.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}

                <span>Mes commandes</span>
              </div>
              <div
                className={` flex gap-2 text-white cursor-pointer  ${
                  option == "Mes cartes" ? "" : "text-opacity-[50%] "
                }`}
                onClick={() => {
                  setOption("Mes cartes");
                }}
              >
                {option === "Mes cartes" && (
                  <Image
                    src="/whiteicons/cardwhite.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}
                {option !== "Mes cartes" && (
                  <Image
                    src="/card.png"
                    height={20}
                    width={20}
                    alt=""
                    className="object-contain"
                  />
                )}
                <span className="">Mes cartes</span>
              </div>
              <div
                className={` flex gap-2 text-white cursor-pointer transform active:scale-y-100 transition-transform  ${
                  option == "Deconnexion" ? "" : "text-opacity-[50%] "
                }  `}
                onClick={() => {
                  if (typeof window !== 'undefined'){

                    localStorage.clear();
                  }
                  setDeLogde();
                  router.push("/");
                }}
              >
                <Image
                  src="/deconnexion.png"
                  height={20}
                  width={20}
                  alt=""
                  className="object-contain"
                />
                <span>Deconnexion</span>
              </div>
            </div>
          </div>
          {option === "Profile" && <Profilesetting />}
          {option === "Mes commandes" && <Commande />}{" "}
          {option === "Mes cartes" && <Mescartes />}
        </div>
      </div>
    </div>
  );
}
