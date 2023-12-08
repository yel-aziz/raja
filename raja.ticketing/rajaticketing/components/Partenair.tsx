"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Partenair() {
  useEffect(() => {
    const scrollToElement = () => {
      const container = document.getElementById("container");
      const element = document.getElementById("element");

      if (container && element) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: "smooth",
        });
      }
    };

    scrollToElement();
  }, []);
  return (
    <div className="w-[85%] mb-32  mt-26 z-0  max-w-[1440px] mx-auto">
      <div className=" h-auto text-3xl md:text-5xl font-helvetica my-12 font-helvatica">
        PARTENAIRE
        <p className="text-xs space-x-10 my-3">
          Domus Studiorum Seriis Cultibus
        </p>
      </div>

      <div
        id="container"
        className="flex items-center relative  justify-center h-52  bg-darkgreen  rounded-xl w-full transition duration-150 bg-[url('/partenairbackground.jpg')] bg-cover "
      >
        <div id="element" className=" flex gap-5 overflow-auto ">
          <div className="bg-white w-[170px] h-[96px] items-center justify-center flex  rounded-xl ">
            <div className="h-[45px] w-[116px]">
              <Image
                src="/atlantasanad.png"
                alt=""
                width={800}
                height={1080}
                className="w-full h-full object-contain pointer-events-none "
              />
            </div>
          </div>
          <div className="bg-white w-[170px] h-[96px] items-center justify-center flex  rounded-xl ">
            <div className="h-[45px] w-[116px]">
              <Image
                src="/1xbet.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
          <div className="bg-white w-[170px] h-[96px] items-center justify-center flex  rounded-xl ">
            <div className="h-[45px] w-[116px]">
              <Image
                src="/nordar.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
          <div className="bg-white w-[170px] h-[96px] items-center justify-center flex  rounded-xl ">
            <div className="h-[45px] w-[116px]">
              <Image
                src="/marsamaroc.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        
          <div className="bg-white w-[170px] h-[96px] items-center justify-center flex  rounded-xl ">
            <div className="h-[45px] w-[116px]">
              <Image
                src="/sofac.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
