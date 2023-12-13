"use client";
import axios from "axios";
import { useState } from "react";

export default function Recover() {
  const [email, SetEmail] = useState("");

  const handlechangeemail = (event: any) => {
    SetEmail(event.target.value);
  };

  async function sendmailreset() {
    SetEmail(" ");
    const respone = await axios.post(
      "https://apiraja.guichet.com/v1/users/password/recover",
      {
        email: email,
      }
    );
    console.log(respone);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[500px] h-auto p-5 bg-darkgreen m-10">
        <h3 className="font-helvatica  text-white">PASS RECOVER</h3>
        <div className="flex justify-center items-center flex-col w-[85%] h-[50%]">
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              placeholder="Enter your E-Mail"
              className="bg-transparent w-full outline-none text-white border-b border-white border-opacity-[50%] h-10"
              value={email}
              onChange={
                handlechangeemail
              }
            />
          </div>
          <h1 className="text-red text-sm mt-2">
            ⚠️Ne partagez pas le liens de réinitialisation avec quelqu un
          </h1>
        </div>
        <button
          className=" bg-blackgreen text-white font-helvatica rounded-full text-sm p-2 transform active:scale-75 transition-transform mt-5"
          onClick={() => {
            sendmailreset();
            SetEmail(" ");
          }}
        >
          {" "}
          SEND RESET MAIL
        </button>
      </div>
    </div>
  );
}
