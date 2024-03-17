'use client'
import { Aside } from "@/components/Aside";
import { TableCentral } from "@/components/TableCentral";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
    const [seleccionados, setSeleccionados] = useState([]);

    const checkHandler = (e) => {
        const id = e.target.id;
        if (seleccionados.includes(id)) {
            // Si el id ya está en la lista, lo quitamos
            setSeleccionados(seleccionados.filter(item => item !== id));
        } else {
            // Si el id no está en la lista, lo agregamos
            setSeleccionados([...seleccionados, id]);
        }
    }

    console.log('Seleccionados: ', seleccionados)

    const [data, setData] = useState([]);

    const [dataAuth, setDataAuth] = useState({
        _id: "",
        username: "",
        password: "",
        tribu: "",
    });

    const getUser = async (token) => {
        const tokenJSON = { token: token };
        const resp = await axios.post(
            "http://localhost:8080/api/jwtDecoded",
            tokenJSON
        );
        return resp.data;
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUser(token).then((userData) => {
                setData(userData.usuarios);
                setDataAuth({
                    _id: userData._id,
                    username: userData.username,
                    password: userData.password,
                    tribu: userData.tribu,
                });
            });
        }
    }, []);

    return (
        <>
            <div className="flex">
                <Aside />
                <div className="text-4xl text-black relative w-full">
                    <div className="bg-[#2c2c2b] ml-10 relative top-10 px-4 py-2 h-10 -skew-x-12 w-[300px]">
                        <h2 className="ml-5 text-white text-2xl font-bold ">
                            Zona de pruebas
                        </h2>
                    </div>
                    <div className="mt-16 cursor-pointer rounded-xl w-[170px] py-2 px-4 ml-10 opacity-85 ">
                        <h3 className="text-2xl text-black font-bold border-black border-b-2">Recarga</h3>
                    </div>
                    <div className="bg-[#2c2c2b] rounded-xl py-4 px-6 mt-8 w-[380px] ml-10">
                        <h2 className="text-lg text-center text-white">¿Con qué usuarios hacemos la recarga?</h2>
                        <div className="h-auto">
                            {data.map(user => (

                                <div key={user.doc} className="flex justify-center">
                                    <p className="text-white text-lg text-center mt-4 bg-[#2c2c2b] opacity-20 cursor-pointer hover:text-[#d77355] hover:opacity-95 rounded-xl">{user.doc}</p>
                                    <input onChange={checkHandler} id={user.doc} type="checkbox" className="mt-3 ml-2" />

                                </div>

                            ))}
                            <div className="flex justify-center mt-4">
                                <button className="bg-[#f4521b] px-2 py-1 text-white rounded-lg text-lg  ">Ejecutar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
