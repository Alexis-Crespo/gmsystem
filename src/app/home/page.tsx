"use client";
import { Aside } from "@/components/Aside";
import { FormAdd } from "@/components/FormAdd";
import { TableCentral } from "@/components/TableCentral";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";

export default function Home() {
  interface dataUsers {
    doc: number;
    du: boolean;
    pa: boolean;
    usuario: string;
    pass: string;
    tarjetas: boolean;
    visa: boolean;
    mastercard: boolean;
    amex: boolean;
    ca: boolean;
    cc: boolean;
    usd: boolean;
    homologacion: boolean;
    desarrollo: boolean;
    cliente: boolean;
    publico: boolean;
    creador: string;
  }

  const [data, setData] = useState<dataUsers[]>([
    {
      doc: 0,
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
      homologacion: false,
      desarrollo: false,
      cliente: false,
      publico: false,
      creador: "",
    },
  ]);

  const [centralUser, setCentralUser] = useState(1);
  const [isAdd, setIsAdd] = useState(false);

  const handlerIsAdd = () => {
    setIsAdd(!isAdd);
  };

  const [dataAuth, setDataAuth] = useState({
    _id: "",
    username: "",
    password: "",
    tribu: "",
  });

  /* 
    ON DELETE

    	const onDelete = async () => {
		console.log('OnDelete')
		const userDelete = await axios.delete(`http://localhost:8080/api/usuarios/${_id}`)

		if (userDelete.status == 200) {
			managerState.refreshUser()
		}
	}
  */

  /* 
    ON EDIT

    const onSubmitEdit = async (e) => {
		const data = {
			doc: dataEdit.doc,
			usuario: dataEdit.usuario,
			pass: dataEdit.pass,
			publico: isPublic,
		}

		const update = await axios.put(`http://localhost:8080/api/usuarios/${_id}`, data)

		if (update.status == 200) {
			setIsEdit(!isEdit)
			managerState.refreshUser()
		}
	}
  */

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

  console.log("Data de Home.. ", data);

  return (
    <>
      <div className="flex  bg-[#dfdbd9]">
        <Aside />
        <div className="flex flex-wrap ">
          <div className="w-[100vw] mb-20  h-[26px] flex ">
            <h2 className=" ml-10 mt-10 text-2xl font-bold">Usuarios</h2>
            <div className="flex  w-[75vw] justify-end">
              <FiUserPlus
                onClick={handlerIsAdd}
                className="z-50 text-3xl mt-10 relative right-20 text-[#f4521b] cursor-pointer"
              />
            </div>
          </div>
          {isAdd ? (
            <FormAdd
              dataAuth={dataAuth}
              setIsAdd={setIsAdd}
              setCentralUser={setCentralUser}
            />
          ) : (
            <div className="w-[95vw] ml-4 h-[90%] bg-gray-200  relative ">
              <TableCentral
                data={data}
                setData={setData}
                setCentralUser={setCentralUser}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
