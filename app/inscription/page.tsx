"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Auth } from "../redux/loginslice";

export default function Inscription() {
  const redirect = useRouter();
  const [Prenom, SetPrenom] = useState("");
  const [Nom, SetNom] = useState("");
  const [email, SetEmail] = useState("");
  const [Telephone, SetTelephone] = useState("");
  const [MotDePass, SetMotDePasse] = useState("");
  const [ConfirmationMotDePass, SetMotDePasseCofirmation] = useState("");
  const [errorfill, setErrorFill] = useState("");
  const [checkbox, setcheckbox] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const fromdata = new FormData();
  fromdata.append("email", email);
  fromdata.append("first name", Nom);
  fromdata.append("last name", Prenom);
  fromdata.append("phone", Telephone);
  fromdata.append("password", MotDePass);

  const validationstate = () => {
    if (
      !Prenom.trim() ||
      !Nom.trim() ||
      !email.trim() ||
      !Telephone.trim() ||
      !MotDePass.trim() ||
      !ConfirmationMotDePass.trim() ||
      checkbox != true
    ) {
      setErrorFill("*please fill this case");
      return 1;
    }
    else{
      setErrorFill('')
    }
  };

  async function getme() {
    try {
      const cookieArray = document.cookie.split("jwt=");

      const jwt = cookieArray[1];
    await axios
        .get("https://apiraja.guichet.com/v1/users/me", {
          headers: {
            Authorization: `Bearer  ${jwt}`,
          },
        })
        .then((response) => {
          dispatch(Auth(response));
          router.push("/");
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(err);
    }
    
  }
  async function Register() {
    try {
      if (validationstate() === 1) return;
     const newjwt =  await axios
        .post(`https://apiraja.guichet.com/v1/users/register`, fromdata)
        .then((res) => {
          const jwt = res.data.token
          document.cookie = `jwt=${jwt}`;
          getme();
       
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
   
  };
  const handleChangeprenom = (event: any) => {
    SetPrenom(event.target.value);
  };

  const handleChangeNom = (event: any) => {
    SetNom(event.target.value);
  };
  const handleChangeEmail = (event: any) => {
    SetEmail(event.target.value);
  };
  const handleChangeTelephone = (event: any) => {
    SetTelephone(event.target.value);
  };
  const handleChangeMotDePasse = (event: any) => {
    SetMotDePasse(event.target.value);
  };
  const handleChangeMotDePasseConfirmation = (event: any) => {
    SetMotDePasseCofirmation(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="text-white  text-2xl font-helvatica mt-10">
        INSCRIPTION
      </div>
      <div className=" md:w-[592px] w-[80%] h-auto bg-darkgreen m-10 ">
        <div className="flex flex-col  justify-between h-full m-5">
          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/user.png"
                alt="/"
                width={100}
                height={100}
                className=" bg-cover"
              />
            </div>
            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-[50%]"
              value={Prenom}
              onChange={handleChangeprenom}
              placeholder="Prénom"
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>
          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/user.png"
                alt="/"
                width={100}
                height={100}
                className="bg-cover"
              />
            </div>

            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
              placeholder="Nom"
              value={Nom}
              onChange={handleChangeNom}
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>
          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/email.png"
                alt="/"
                width={100}
                height={100}
                className="bg-cover"
              />
            </div>
            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
              placeholder="E-mail"
              value={email}
              onChange={handleChangeEmail}
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>

          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/call.png"
                alt="/"
                width={100}
                height={100}
                className="bg-cover"
              />
            </div>
            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
              placeholder="Téléphone"
              value={Telephone}
              onChange={handleChangeTelephone}
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>
          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/password.png"
                alt="/"
                width={100}
                height={100}
                className="bg-cover"
              />
            </div>
            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 "
              placeholder="Mot de passe"
              value={MotDePass}
              onChange={handleChangeMotDePasse}
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>
          <div className=" flex mb-5 justify-center items-center gap-3 w-full border-b border-white border-opacity-[50%] h-[50px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/password.png"
                alt="/"
                width={100}
                height={100}
                className="mb-1 bg-cover"
              />
            </div>
            <input
              className="w-full bg-transparent outline-none text-white placeholder-white placeholder-opacity-40 text-xs md:text-base "
              placeholder="Confirmer le mot de passe"
              value={ConfirmationMotDePass}
              onChange={handleChangeMotDePasseConfirmation}
            ></input>
          </div>
          <div className="text-red">{errorfill}</div>

          <div
            className="flex gap-3 text-white text-opacity-[50%] mt-5"
            onClick={() => setcheckbox(!checkbox)}
          >
            <input
              type="checkbox"
              value=""
              className="w-[22px] h-[22px] custom-transparent-checkbox"
              required
            />
            <p className="">j accepte toutes les conditions</p>
          </div>
          <div className="text-red">{errorfill}</div>

          <div className="items-center flex justify-center flex-col text-white mt-10 ">
            <button
              className="bg-darkgreenlite shadow-sm shadow-black p-3 rounded-full  w-[200px] md:w-[256px] transform active:scale-75 transition-transform"
              onClick={() => {
                Register();
              }}
            >
              S inscrire
            </button>
            <div className="flex mt-5 gap-2">
              <p className="text-white text-opacity-[50%]">
                Vous avez déjà un compte?{" "}
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  redirect.push("/connexion");
                }}
              >
                Connectez-vous
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
