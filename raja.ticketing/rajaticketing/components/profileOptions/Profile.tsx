import { Auth, setLogin } from "@/app/redux/loginslice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "url";
import Cookies from "js-cookie";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Profile() {
  var item: any;

  item = localStorage.getItem("user_info");

  const despatch = useDispatch();
  if (item) {
    despatch(setLogin(item));
  }
  const [selectedImage, setSelectedImage] = useState("null");
  const [prenom, setPrenom] = useState(
    useSelector((state: any) => state.login.firstName)
  );
  const [LastName, setLastName] = useState(
    useSelector((state: any) => state.login.lastName)
  );
  const [phone, setPhone] = useState(
    useSelector((state: any) => state.login.phoneNumber)
  );
  const [email, setEmail] = useState(
    useSelector((state: any) => state.login.email)
  );
  const [avatar, setAvatar] = useState(
    useSelector((state: any) => state.login.avatar)
  );
  const [passwordactuel, setPassword] = useState("");
  const [passconfirm1, setpassconfirm1] = useState("");
  const [passconfirm2, setpassconfirm2] = useState("");

  const dispatch = useDispatch();

  const handlePrenomChange = (event: any) => {
    setPrenom(event.target.value);
  };
  const handlePassChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handlePassconfirm1 = (event: any) => {
    setpassconfirm1(event.target.value);
  };
  const handlePassconfirm2 = (event: any) => {
    setpassconfirm2(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  async function refreshToken() {
    try {
      console.log("yassir token refresh");
      const torefresh = Cookies.get("jwt");
      const refreshtoken = await axios.post(
        "https://apiraja.guichet.com/v1/users/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${torefresh}`,
          },
        }
      );
      const refresh = refreshtoken.data.token;
      document.cookie = `jwt=${refresh}`;
      console.log("new token", refresh);
    } catch (error) {
      console.log(error);
    }
  }

  async function changeData() {
    console.log("ererfzev");
    const object = {
      first_name: prenom,
      last_name: LastName,
      email: email,
      phone: phone,
    };
    try {
      var jwt = Cookies.get("jwt");
      var axiosHeaders = {
        Authorization: `Bearer ${jwt}`,
        // Add other serializable headers if needed
      };

      const response = await axios.post(
        "https://apiraja.guichet.com/v1/users/update",
        object,
        {
          headers: axiosHeaders,
        }
      );

      document.cookie = `jwt=${response.data.token}`;
      var storedData;
      if (typeof window !== "undefined") {
        storedData = localStorage.getItem("user_info");
        dispatch(setLogin(storedData));
      }

      if (storedData) {
        const userData = JSON.parse(storedData);
        userData.firstName = object.first_name;
        userData.lastName = object.last_name;
        userData.phone = object.phone;
        userData.email = object.email;
        if (typeof window !== "undefined") {
          localStorage.setItem("user_info", JSON.stringify(userData));
        }

        if (response.data.success != true) {
          toast.warning(response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (response.data.success === true) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          dispatch(setLogin(storedData));
        }
      }
    } catch (err) {
      if (err.response.request.status === 401) {
        refreshToken();
      }
      console.log(err.response.request.status);
    }
  }

  async function passconfirmationcheck() {
    if (
      passconfirm1.length > 0 &&
      passconfirm2.length > 0 &&
      passconfirm1 === passconfirm2
    ) {
      const obj = {
        old_password: passwordactuel,
        new_password: passconfirm1,
        password_confirmation: passconfirm2,
      };
      try {
        const jwt = Cookies.get("jwt");
        const response = await axios.post(
          "https://apiraja.guichet.com/v1/users/password/change",
          obj,
          {
            headers: {
              Authorization: `Bearer  ${jwt}`,
            },
          }
        );
        if (response.data.success != true) {
          toast.warning(response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (response.data.success === true) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        if (error.response.request.status === 401) {
          refreshToken();
        }
        console.log(error.response.request.status);
      }
    } else {
      changeData();
    }
  }

  return (
    <div className=" lg:w-[800px] md:w-[60%] bg-darkgreen lg:ml-5 md:ml-5 md:mt-0 mt-5 lg:mt-0">
      <div className="m-5   space-y-5 font-helvatica text-white mt-10">
        <span className="md:text-2xl ">Modifier mon profile</span>
        <div className="flex bg-dark flex-col md:flex-row items-center md:w-[35%] text-white justify-between  h-full">
          <div className=" relative">
            <div className="flex  w-[110px] h-[110px] rounded-full  ">
              <Image
                src={avatar}
                alt=""
                className="object-cover w-full h-full rounded-full "
                width={500}
                height={500}
              />
              <label className=" w-7 h-15  absolute right-0 top-0" id="custome">
                <Image
                  src="/pen.png"
                  alt=""
                  className="object-contain w-full h-full"
                  width={500}
                  height={500}
                />
                <input type="file" accept="" id="custome" className="hidden" />
              </label>
            </div>
          </div>
          <p className="font-helvatica text-lg relative">
            {prenom} {LastName}
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10 gap-3 ">
          <div className="flex items-center justify-center lg:w-[364px]  w-full  h-[50px] gap-1 border-b   border-white border-opacity-[50%] font-helvatica">
            <Image src="/user.png" alt="" width={20} height={20} />
            <input
              placeholder="Prénom"
              className="w-full bg-transparent outline-none text-sm placeholder-white placeholder-opacity-[50%]"
              value={prenom}
              onChange={handlePrenomChange}
            />
            <Image src="/modificationpen.png" alt="" width={20} height={20} />
          </div>
          <div className="flex items-center justify-center lg:w-[364px]  w-full h-[50px] gap-1 border-b border-white border-opacity-[50%] font-helvatica">
            <Image src="/user.png" alt="" width={20} height={20} />
            <input
              placeholder="Nom"
              className="w-full bg-transparent outline-none text-sm placeholder-white placeholder-opacity-[50%]"
              value={LastName}
              onChange={handleLastNameChange}
            />
            <Image src="/modificationpen.png" alt="" width={20} height={20} />
          </div>

          <div className="flex items-center justify-center  lg:w-[364px]  w-full h-[50px] gap-1 border-b border-white border-opacity-[50%] font-helvatica">
            <Image src="/email.png" alt="" width={20} height={20} />
            <input
              placeholder="E-mail"
              className="w-full p-1 bg-transparent outline-none text-sm placeholder-white placeholder-opacity-[50%]"
              value={email}
              onChange={handleEmailChange}
            />
            <Image src="/modificationpen.png" alt="/" width={20} height={20} />
          </div>
          <div className="flex items-center justify-center  lg:w-[364px]  w-full h-[50px] gap-1 border-b border-white border-opacity-[50%] font-helvatica">
            <Image src="/call.png" alt="" width={20} height={20} />
            <input
              placeholder="Téléphone"
              className="w-full bg-transparent outline-none text-sm placeholder-white placeholder-opacity-[50%]"
              value={phone}
              onChange={handlePhoneChange}
            />
            <Image src="/modificationpen.png" alt="" width={20} height={20} />
          </div>
        </div>
        <div className="font-helvatica text-2xl  space-y-5  h-full ">
          <p className="mt-10">Changer le mot de passe</p>
          <div className="h-[50px]  flex items-center  justify-center border-b border-white border-opacity-[50%] gap-1 font-helvatica">
            <div className="  h-[19px] w-[16px]">
              <Image
                src="/password.png"
                className="w-full h-full object-cover "
                width={20}
                height={20}
                alt=""
              />
            </div>
            <input
              placeholder="Mot de passe actuel"
              value={passwordactuel}
              className="w-full bg-transparent outline-none p-1 placeholder-white placeholder-opacity-[50%] text-sm"
              onChange={handlePassChange}
            />
          </div>
          <div className="h-[50px] flex items-center justify-center border-b  border-white border-opacity-[50%] gap-1 font-helvatica">
            <div className="  h-[19px] w-[16px]">
              <Image
                src="/password.png"
                className="w-full h-full object-cover "
                width={20}
                height={20}
                alt=""
              ></Image>
            </div>
            <input
              placeholder="Nouveau mot de passe"
              className="w-full bg-transparent outline-none p-1 placeholder-white border-white placeholder-opacity-[50%] text-sm"
              onChange={handlePassconfirm1}
              value={passconfirm1}
            />
          </div>
          <div className="h-[50px] flex items-center justify-center border-b  border-white border-opacity-[50%] gap-1 font-helvatica">
            <div className="  h-[19px] w-[16px]">
              <Image
                src="/password.png"
                className="w-full h-full object-cover "
                width={50}
                height={50}
                alt=""
              ></Image>
            </div>
            <input
              placeholder="Confirmez le mot de passe"
              className="w-full bg-transparent outline-none p-1 placeholder-white placeholder-opacity-[50%] text-sm"
              onChange={handlePassconfirm2}
              value={passconfirm2}
            />
          </div>
        </div>
        <div
          onClick={() => {
            passconfirmationcheck();
          }}
        >
          <button className="md:w-[256px] h-[44px] w-40 rounded-full shadow-sm shadow-black transform active:scale-75 transition-transform mt-5">
            ENREGISTRER
          </button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
