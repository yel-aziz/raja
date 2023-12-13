"use client";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import { Auth, setLogin } from "./redux/loginslice";

import store from "./redux/store";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const proceder = "/proceder";
  const desire = proceder === path;
  const pathmatch = usePathname();
  const match = "/match";
  const status = match === pathmatch;
  const pathacceuil = usePathname();
  const acceuil = "/";
  const statusacceuil = acceuil === pathacceuil;

  return (
    <Provider store={store}>
      <html>
        <body className="min-h-screen bg-darkgreen ">
          <div className=" flex flex-col  bg-blackgreen ">
            <Image
              src="/matchbackground.png"
              alt=""
              className={`absolute w-full h-[50%] xl:h-[50%] lg:h-[70%]  pointer-events-none ${
                status ? "block" : "hidden"
              }`}
              width={500}
              height={500}
              quality={100}

            />
            <Image
              src="/acceuilbackground.png"
              alt=""
              className={`absolute w-full h-[50%] xl:h-[50%] lg:h-[70%] pointer-events-none  ${
                statusacceuil ? "block" : "hidden"
              }`}
              width={500}
              height={500}
              quality={100}
            />

            <header className="z-0 border-b border-[#06422B]">
              <link
                rel="icon"
                type="image/png"
                href="/favicon1.png"
                sizes="500x500"
              />

              {!desire && <Navbar />}
            </header>

            <main className="flex-grow mb-10 ">{children}</main>

            {!desire && <Footer />}
          </div>
        </body>
      </html>
    </Provider>
  );
}
