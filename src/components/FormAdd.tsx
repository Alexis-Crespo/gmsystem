import axios from "axios";
import { useContext, useState } from "react";
import "./../app/login.css";

export const FormAdd = ({ dataAuth, setIsAdd, setCentralUser }) => {
  console.log("A VER EL FORM ADD ID? : ", dataAuth._id);
  const [addUser, setAddUser] = useState({
    doc: "",
    du: false,
    pa: false,
    usuario: "",
    pass: "",
    tarjetas: false,
    visa: false,
    mastercard: false,
    amex: false,
    ca: false,
    cc: false,
    usd: false,
    afip: "",
    homologacion: false,
    desarrollo: false,
    cliente: true,
    publico: true,
    creador: dataAuth._id,
  });

  const onHandlerChange = (e) => {
    const { name, type, checked, value } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setAddUser({
      ...addUser,
      [name]: newValue,
    });
    console.log(addUser);
  };

  const onHandlerSubmit = async (e) => {
    e.preventDefault();

    const resp = await axios.post(
      "http://localhost:8080/api/usuarios",
      addUser
    );
    if (resp.status === 200) {
      setIsAdd((prevState) => {
        !prevState;
      });
      setCentralUser((prevUSer) => prevUSer + 1);
    }
  };

  return (
    <div className="flex h-[90vh]  ">
      <div className="login-box py-2 px-8 -mt-5">
        <form onSubmit={onHandlerSubmit}>
          <h2 className="">Credenciales (*)</h2>
          <div className="-mt-2 mb-4">
            <label className="text-white mr-1 ">DU</label>
            <input onChange={onHandlerChange} type="checkbox" name="du" />
            <label className="text-white mr-1 ml-2">PA</label>
            <input onChange={onHandlerChange} type="checkbox" name="pa" />
            <label className="text-white mr-1 ml-8">HOMO</label>
            <input
              onChange={onHandlerChange}
              type="checkbox"
              name="homologacion"
            />
            <label className="text-white mr-1 ml-1">DESA</label>
            <input
              onChange={onHandlerChange}
              type="checkbox"
              name="desarrollo"
            />
          </div>

          <div className="user-box">
            <input onChange={onHandlerChange} type="text" name="doc" required />
            <label>Documento</label>
          </div>
          <div className="user-box">
            <input
              onChange={onHandlerChange}
              type="usuario"
              name="usuario"
              required
            />
            <label>Usuario</label>
          </div>
          <div className="user-box">
            <input
              onChange={onHandlerChange}
              type="text"
              name="pass"
              required
            />
            <label>Password</label>
          </div>

          <h3 className="mt-2 mb-4 text-white">Data (Opcional) </h3>
          <div className="user-box">
            <label className="-mt-4">AFIP</label>
            <select
              className="mt-6 mb-2 "
              onChange={onHandlerChange}
              name="afip"
            >
              <option value="M">Monotributista</option>
              <option value="A">Autónomo</option>
            </select>
          </div>
          <div className="mt-2">
            <label className="text-white mr-1">Tarjetas</label>
            <input
              onChange={onHandlerChange}
              type="checkbox"
              name="tarjetas"
              value="true"
            />
            <label className="text-white ml-2 mr-1">Cliente</label>
            <input
              onChange={onHandlerChange}
              type="checkbox"
              name="password"
              value="true"
              defaultChecked
            />
            <label className="text-white ml-2 mr-1">Publico</label>
            <input
              onChange={onHandlerChange}
              type="checkbox"
              name="public"
              value="true"
              defaultChecked
            />
          </div>
          <div className="w-full flex justify-center  ">
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
