"use client";
import axios from "axios";
import { Link } from "lucide-react";
import { useState } from "react";

export const RegisterBox = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    tribu: "",
    password: "",
  });

  const onHandlerChange = (e) => {
    e.preventDefault();

    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const onHandlerSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);

    const register = await axios.post(
      "http://localhost:8080/api/auth/register",
      registerData
    );

    if (register) {
      console.log("Registro ok!");
      window.location.href = "./home";
    }
  };

  return (
    <>
      <div className="login-box ">
        <h2 className="text-2xl">REGISTRARSE</h2>
        <form onSubmit={onHandlerSubmit}>
          <div className="user-box">
            <input
              onChange={onHandlerChange}
              type="text"
              name="username"
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              onChange={onHandlerChange}
              type="text"
              name="tribu"
              required
            />
            <label>Tribu</label>
          </div>
          <div className="user-box">
            <input
              onChange={onHandlerChange}
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <button className="ml-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Registrarse
          </button>
          <div className="w-[100%] flex justify-center  ">
            <p className="text-white text-sm  text-center mt-6 -mb-4">
              ¿ Ya tenes cuenta ?{" "}
            </p>
            <a
              href={"/"}
              className=" text-primary mt-5 ml-4  font-bold cursor-pointer text-white text-lg"
            >
              LOGIN
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
