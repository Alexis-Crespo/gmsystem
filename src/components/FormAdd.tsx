import axios from "axios";
import { useContext, useState } from "react";
import "./../app/login.css";

export const FormAdd = ({ dataAuth, setIsAdd, setCentralUser }) => {
  console.log("A VER EL FORM ADD ID? : ", dataAuth._id);
  const [addUser, setAddUser] = useState({
    doc: "",
    du: true,
    usuario: "",
    pass: "",
    cuentas: [],
    publico: true,
    creador: dataAuth._id,
    traeData: false,
    logeado: false
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
