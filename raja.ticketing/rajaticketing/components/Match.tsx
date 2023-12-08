"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Match({
  match = "raja",
  localisation = "casa",
  time = "0",
  cover = "/",
}: any) {
  const redirection = useRouter();
  return (
    <div
      className=" hover:shadow-2xl cursor-pointer   w-[384px]"
      onClick={() => redirection.push("/match")}
    >
      <div className="">
        <div className="w-auto   ">
          <Image
            src={cover}
            alt="cover"
            width={500}
            height={500}
            className="bg-cover rounded-t-md pointer-events-none"
            quality={100}
          />
        </div>
        <div className="bg-darkgreen  flex justify-center w-auto rounded-b-md ">
          <div className="  w-[90%]  ">
            <p className="flex  text-2xl w-full font-helvatica  border-dashed border-b border-greenf2  h-16 items-center">
              {match}
            </p>
            <div className=" flex flex-col gap-4 mb-5 mt-5">
              <div className="flex items-center gap-2 ">
                <div className="w-[20px] sm:w-[20px] md:w-[20px] ">
                  <Image
                    src="/localisation.png"
                    alt="localisation"
                    width={300}
                    height={500}
                    className="w-full h-full object-contain pointer-events-none"
                    quality={100}
                  />
                </div>
                <p className="text-xs">{localisation}</p>
              </div>
              <div className="flex items-center gap-2  ">
                <div className="w-[20px] ">
                  <Image
                    src="/clock-circle.png"
                    alt="clock"
                    width={300}
                    height={500}
                    className="w-full h-full object-contain pointer-events-none"
                    quality={100}
                  />
                </div>
                <p className="text-xs">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
