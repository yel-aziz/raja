"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setDeLogde, setLogin } from "@/app/redux/loginslice";
import { parse } from "path";

export default function Navbar() {
  const [options, setOptions] = useState<boolean>(false);
  const redirection = useRouter();
  const debug = require("debug");
  const dispatch = useDispatch();

  var statelogin = useSelector((state: any) => state.login.statelogin);
  var firstName = useSelector((state: any) => state.login.firstName);
  var lastName = useSelector((state: any) => state.login.lastName);
  var avatar = useSelector((state: any) => state.login.avatar);

  
  function itemcheck() {
    var item;
    if (typeof window !== "undefined") {
      item = localStorage.getItem("user_info");
     

      if (item) {
        console.log("dispatched");
        dispatch(setLogin(item));
      } else if (!item) {
        dispatch(setDeLogde());
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => setOptions(false));
    itemcheck();
  });

  useEffect(() => {
    const item = localStorage.getItem("user_info");
    if (item) {
      const parsed = JSON.parse(item);

      console.log("item==>", parsed.avatar);
      avatar = parsed.avatar
      dispatch(setLogin(item));
    } else {
      dispatch(setDeLogde());
    }
  }, [dispatch]);

  return (
    <div className="flex justify-center  font-helvatica text-xs  bg-transparent  h-auto  ">
      <div className="flex justify-between items-center  max-w-[1440px] mx-auto h-16 lg:w-[90%]  w-[80%] ">
        <div
          className="w-[150px] h-15 z-0"
          onClick={() => redirection.push("/")}
        >
          <Image
            src="/rajabillettrie.png"
            alt="raja logo"
            className="z-0 object-contain w-full h-full pointer-events-none  "
            width={900}
            height={900}
            quality={100}
          />
        </div>

        <div className="flex flex-col  mr-14 md:mr-0  justify-center md:items-center">
          <div
            className={`bg-darkgreen md:bg-transparent rounded-md w-28 md:relative  ${
              options ? "block " : "hidden"
            } fixed  mt-36  md:block md:mt-0 `}
          >
            <div className="">
              <ul
                key={1}
                className=" flex  justify-center md:flex-row text-center flex-col rounded-md  md:underline-offset-[220%] gap-2 lg:space-x-14 w-auto text-white "
              >
                <Link
                  key={2}
                  href="/"
                  className="hover:underline "
                  onClick={() => {
                    setOptions(!options);
                  }}
                >
                  ACCEUIL
                </Link>
                <Link
                  key={3}
                  href="/match"
                  className="hover:underline "
                  onClick={() => setOptions(!options)}
                >
                  MATCH
                </Link>
                <Link
                  key={4}
                  href="/abonnement"
                  className="hover:underline "
                  onClick={() => setOptions(!options)}
                >
                  CARTES
                </Link>
                <Link
                  key={5}
                  href="/contact"
                  className="hover:underline "
                  onClick={() => setOptions(!options)}
                >
                  CONTACT
                </Link>
                <Link
                  key={6}
                  href="/connexion"
                  className="md:hover:underline block md:hidden"
                >
                  CONNEXION
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex text-white items-center gap-2 ">
          <div className={`${statelogin ? "hidden" : "md:block"} hidden `}>
            <Link
              key={7}
              href="/connexion"
              className="bg-white rounded-full  md:h-9 md:w-48  p-2 text-darkgreen  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              connexion / Inscription
            </Link>
          </div>
          <div className="bg-white flex ">
            <Image
              src="/menu-bar.png"
              className="block md:hidden  object-contain w-full h-full "
              onClick={() => setOptions(!options)}
              alt="raja"
              width={30}
              height={30}
            ></Image>
          </div>
          <div
            className={` w-[44px] h-[44px] cursor-pointer  ${
              statelogin ? "block" : "hidden"
            }`}
            onClick={() => {
              redirection.push("/profile");
            }}
          >
            <Image
              src={avatar}
              alt="/"
              width={50}
              height={50}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h1
            className={`hidden font-helvatica ${
              statelogin ? "md:block" : "hidden"
            } `}
          >
            {firstName} {lastName}
          </h1>
        </div>
      </div>
    </div>
  );
}
