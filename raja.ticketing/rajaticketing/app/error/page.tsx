"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Eroor() {
    const redirection = useRouter()
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div className="flex items-center flex-col w-[80%] h-[70%] md:h-[90%] justify-between ">
        <div className="text-white flex items-center flex-col font-helvatica">
          <h1 className="text-4xl">oops !</h1>
          <h1 className="font-thin text-xl font-helvatica">
            quelque chose a mal tourné
          </h1>
        </div>
        <div className="  ">
          <Image
            src="/error.png"
            alt=""
            width={50}
            height={50}
            className="w-full h-full object-contain"
          />
        </div>
        <button className="text-xl text-white rounded-full border w-[146px] h-[40px] font-helvatica" onClick={()=>redirection.push('/')}>Retour</button>
      </div>
    </div>
  );
}
