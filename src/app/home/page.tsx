"use client";
import { Aside } from "@/components/Aside";
import { FormAdd } from "@/components/FormAdd";
import { TableCentral } from "@/components/TableCentral";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { SiSpeedtest } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import BoxLoader from "@/components/BoxLoader";
import LoginResult from "@/components/LoginResult";
import BoxLoaderData from "@/components/BoxLoaderData";
import AccResult from "@/components/AccResult";
import { FaEye, FaEyeSlash } from "react-icons/fa";






export default function Home() {
  interface dataUsers {
    doc: number;
    du: boolean;
    cuentas: [];
    usuario: string;
    pass: string;
    publico: boolean;
    creador: string;
    logeado: false;
    traeData: false;
  }

  const [data, setData] = useState<dataUsers[]>([
    {
      doc: 0,
      du: false,
      usuario: "",
      pass: "",
      cuentas: [],
      publico: false,
      creador: "",
      logeado: false,
      traeData: false,
    },
  ]);



  const [centralUser, setCentralUser] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handlerIsAdd = () => {
    setIsAdd(!isAdd);
  };

  const [dataAuth, setDataAuth] = useState({
    _id: "",
    username: "",
    password: "",
    tribu: "",
  });

  const [dataReport, setDataReport] = useState({
    doc: 0,
    usuario: '',
    pass: '',
    logeado: false
  })

  const [isData, setIsData] = useState(false)

  const [cuentasReport, setCuentasReport] = useState({
    doc: '',
    cuentas: []
  })

  const [isAccSuccess, setIsAccSuccess] = useState(false)

  const getUser = async (token: string): Promise<dataUsers> => {
    const tokenJSON = {
      token: token,
    };
    const resp = await axios.post(
      "http://localhost:8080/api/jwtDecoded",
      tokenJSON
    );
    const userFromServer = resp.data;

    return userFromServer;
  };



  const testCredenciales = async () => {
    setIsLogin(true);

    const usuarios = data.map((usuario) => ({
      du: usuario.doc.toString(),
      usuario: usuario.usuario,
      pass: usuario.pass,
    }));



    const resp = await axios.post(
      "http://localhost:8080/api/executions/login",
      { usuarios: usuarios }
    );

    if (resp.status === 200) {



      const getUsersRetrieve = await axios.get(
        `http://localhost:8080/api/usuarios/${dataAuth._id}`

      );

      const usuariosReturn = getUsersRetrieve.data
      console.log('usuariosReturn.usuarios a ver: ', usuariosReturn.usuarios)


      setDataReport(usuariosReturn.usuarios)

      setIsLogin(false);

      setIsFinished(true);

    }
  };

  const testRetrieve = async () => {

    setIsData(true);
    console.log('Se ejecuto el testRetrieve')

    const usuarios = data.map((usuario) => ({
      du: usuario.doc.toString(),
      usuario: usuario.usuario,
      pass: usuario.pass,
    }));

    // Aca llamamos a retrieveData

    const resp = await axios.post(
      "http://localhost:8080/api/executions/traeData",
      { usuarios: usuarios }
    );

    if (resp.status === 200) {



      const getUsersRetrieve = await axios.get(
        `http://localhost:8080/api/usuarios/${dataAuth._id}`

      )

      const usuariosReturn = getUsersRetrieve.data
      console.log('usuariosReturn.usuarios a ver: ', usuariosReturn.usuarios)

      setCuentasReport(
        usuariosReturn.usuarios
      )



      setIsData(false);
      setIsAccSuccess(true)

    }

  }
  console.log('cuentasReport: ', cuentasReport)

  useEffect(() => {
    const token = localStorage.getItem("token");

    getUser(token).then((userData) => {
      setData(userData.usuarios);
      setDataAuth({
        ...dataAuth,
        _id: userData._id,
        username: userData.username,
        password: userData.password,
        tribu: userData.tribu,
      });
    });
  }, [centralUser]);

  const [isEyedSlash, setIsEyedSlash] = useState(false)


  const handlerEye = () => {
    setIsAccSuccess(!isAccSuccess)
    setIsEyedSlash(!isEyedSlash)
  }

  return (
    <>

      <div className="flex  bg-[#f0e9e9] ">
        <Aside />
        <div className="flex-col  ">
          <div className="w-[100vw]   h-[26px] flex ">
            <div className="bg-[#2c2c2b] ml-10 relative top-10 px-4 py-2 h-10 -skew-x-12">
              <h2 className=" ml-5  text-white text-2xl font-bold ">
                Usuarios
              </h2>
            </div>
            <div className="flex  w-[75vw] justify-end">
              <FiUserPlus
                onClick={handlerIsAdd}
                className="z-50 text-3xl mt-12 relative right-28 text-[#f4521b] cursor-pointer"
              />
            </div>
          </div>
          {!isAdd ? (
            <>
              {" "}
              <div className="w-[89%] relative top-16 flex items-center right-8  mx-auto  h-10">
                <div className="ml-4 group relative">
                  <SiSpeedtest
                    onClick={testCredenciales}
                    className=" text-3xl text-[#2c2c2b] cursor-pointer ml-4 mt-3"
                  />
                  <div className="hidden group-hover:block absolute bg-gray-700 opacity-85 p-2 rounded -mt-16 ml-6">
                    <span className="w-[140px] flex text-sm text-center text-white ">
                      Probar credenciales
                    </span>
                  </div>
                </div>

                <div className="ml-10 group relative">
                  <FaDatabase
                    onClick={testRetrieve}
                    className=" text-3xl text-[#2c2c2b] cursor-pointer  mt-3"
                  />
                  <div className="hidden group-hover:block absolute bg-gray-700 opacity-85 p-2 rounded -mt-[4.5rem] ml-6">
                    <span className="w-[140px] flex text-sm text-center text-white ">
                      Traer Datos
                    </span>
                  </div>
                </div>

                {isAccSuccess ? <div className="ml-10 group relative">
                  <FaEye

                    onClick={handlerEye}
                    className=" text-3xl text-[#2c2c2b] cursor-pointer  mt-3"
                  />
                  <div className="hidden group-hover:block absolute bg-gray-700 opacity-85 p-2 rounded -mt-[4.5rem] ml-6">
                    <span className="w-[140px] flex text-sm text-center text-white ">
                      Ocultar Datos
                    </span>
                  </div>
                </div> : null}

                {isEyedSlash ? <div className="ml-10 group relative">
                  <FaEyeSlash

                    onClick={handlerEye}
                    className=" text-3xl text-[#2c2c2b] cursor-pointer  mt-3"
                  />
                  <div className="hidden group-hover:block absolute bg-gray-700 opacity-85 p-2 rounded -mt-[4.5rem] ml-6">
                    <span className="w-[140px] flex text-sm text-center text-white ">
                      Ocultar Datos
                    </span>
                  </div>
                </div> : null}

              </div>






            </>
          ) : null}

          {isAdd ? (
            <FormAdd
              dataAuth={dataAuth}
              setIsAdd={setIsAdd}
              setCentralUser={setCentralUser}
            />
          ) : (
            <div className="w-[480px] ml-10  h-[auto] bg-gray-200  relative top-24  ">
              <TableCentral
                data={data}
                setData={setData}
                setCentralUser={setCentralUser}
              />
            </div>
          )}
          {isLogin ? (
            <div className="relative top-40 ">
              <BoxLoader />
            </div>
          ) : null}
          {isData ? (
            <div className="relative top-40 ">
              <BoxLoaderData />
            </div>
          ) : null}
          {isAccSuccess ?
            <AccResult data={cuentasReport} /> : null}

          {isFinished ? (
            <div className="relative w-[500px] top-40 left-10 ">
              <LoginResult data={dataReport} setIsFinished={setIsFinished} />
            </div>
          ) : null}
        </div>
      </div>

    </>
  );
}
