"use client"

import Image from "next/image";

export default function Cartes({ image='/', ABONNEMENT='0', prix='700' }: any) {
  return (
    <div className="flex gap-5 mt-8 hover:shadow-2xl">
      <div className="bg-[#091D07] md:w-[592px] w-[400px] h-[400px] md:h-[514px] rounded-md">
        <div className=" h-[60%] md:h-[70%] ">
          <Image
            src={image}
            alt=""
            height={100}
            width={5000}
            className=" rounded-t-lg h-full pointer-events-none"
          />
        </div>
        <div className="flex items-center justify-center  w-full h-[40%] md:h-[30%]">
          <div className="w-[95%] h-[85%] ">
            <div className="h-[50%] w-full border-b border-dashed border-greenf2 text-2xl ">
              {ABONNEMENT}
            </div>
            <div className="flex justify-between items-center h-[50%]">
              <span className="md:text-base bg-darkgreen rounded-2xl p-1 md:px-5 text-xs">
                {prix}
              </span>
              <button className="text-xs font-helvatica border rounded-2xl p-2 px-5 hover:border-greenf2">
                je commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
