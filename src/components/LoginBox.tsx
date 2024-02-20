import axios from "axios";
import { useState } from "react";

export const LoginBox = () => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });

  const onHandlerChange = (e) => {
    e.preventDefault();

    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const onHandlerSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);

    const login = await axios.post(
      "http://localhost:8080/api/auth/login",
      loginData
    );

    console.log("Esta es la respuesta de login: ", login);
    if (login) {
      console.log("Login ok!");
      const token = login.data.token;
      localStorage.setItem("token", token);
      window.location.href = "./home";
    }
  };

  return (
    <>
      <div className="login-box ">
        <h2 className="text-2xl">INGRESAR</h2>
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
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LOGIN
          </button>
          <div className="w-[100%]  flex justify-center">
            <p className="text-white text-sm  text-center -mb-4 mt-2">
              ¿ No tenes cuenta ?{" "}
              <a className="ml-4" href="/register">
                Regisrarse
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
