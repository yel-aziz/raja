"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Auth } from "../redux/loginslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Connexion() {
  const Dispatch = useDispatch();
  const Router = useRouter();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  var message = "DONE";

  const handlechangeemail = (event: any) => {
    SetEmail(event.target.value);
  };
  const handlechangePassword = (event: any) => {
    SetPassword(event.target.value);
  };

  const handlekey = (event: any) => {
    if (event.key === "Enter") {
      console.log("event called", event);
      Login();
      return;
    }
    return;
  };

  async function Login() {
    const obj = {
      password: password,
      email: email,
    };

    try {
      const respons = await axios.post(
        "https://apiraja.guichet.com/v1/users/login",
        obj,
        {
          headers: {
            "Cache-Control": "no-cache, private",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (respons.data.success != true) {
        toast.warning(respons.data.message, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (respons.data.success === true) {
        toast.success(respons.data.message, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        Router.push("/");

      }
      const yourJwtToken = respons.data.token;
      document.cookie = `jwt=${yourJwtToken}`;

      try {
        axios
          .get("https://apiraja.guichet.com/v1/users/me", {
            headers: {
              Authorization: `Bearer  ${yourJwtToken}`,
            },
          })
          .then((response) => {
            if (typeof window !== "undefined") {
              localStorage.setItem(
                "user_info",
                JSON.stringify({
                  firstName: response.data.user.firstName,
                  lastName: response.data.user.lastName,
                  avatar: response.data.user.avatar,
                  email: response.data.user.email,
                  phone: response.data.user.phone,
                })
              );
            }

            Dispatch(Auth(response));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="font-helvatica text-white text-2xl mt-10 ">CONNEXION</div>
      <div className="flex flex-col justify-between  md:w-[592px] w-auto bg-darkgreen h-[334px] m-10">
        <div className="m-10 flex flex-col justify-between h-full">
          <input
            placeholder="Nom d’utilisateur / Adresse E-mail"
            value={email}
            onChange={handlechangeemail}
            type="text"
            className="h-[20%] bg-transparent border-b border-white border-opacity-[50%] text-white outline-none placeholder-white placeholder-opacity-[50%] "
          />
          <input
            placeholder="Mot de passe"
            value={password}
            onChange={handlechangePassword}
            onKeyDown={handlekey}
            type="text"
            className="h-[20%]  bg-transparent border-b border-white border-opacity-[50%] text-white outline-none placeholder-white placeholder-opacity-[50%]"
          />
          <div className="flex justify-between text-xs md:text-base text-white text-opacity-[50%] ">
            <p
              onClick={() => {
                Router.push("PassRecover");
              }}
              className="cursor-pointer"
            >
              Vous avez oublié votre mot de passe ?
            </p>
            <p
              className="cursor-pointer "
              onClick={() => {
                Router.push("/inscription");
              }}
            >
              Créer un compte
            </p>
          </div>
          <div
            className="flex items-center justify-center w-full"
            onClick={() => {
              Login();
            }}
          >
            <button className="bg-darkgreenlite py-2 rounded-full px-10 text-white   transform active:scale-75 transition-transform  shadow shadow-black ">
              CONNEXION
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}
