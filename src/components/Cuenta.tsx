import { useState } from 'react';
import ItemCuenta from './ItemCuenta';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const Cuenta = ({ cuentas, usuario }) => {

    console.log('cuentas desde cuenta: ', cuentas)

    const [mostrar, setmostrar] = useState(false)

    const handlerAcc = () => {
        setmostrar(!mostrar)
    }

    return (
        <>
            <div className="bg-[#2c2c2b]  mb-6 h-auto relative top-40 w-[480px] mx-auto ml-10 rounded-xl px-4 py-6 ">
                <h2 className="text-[#f4521b] text-2xl  ">Usuario : <span className="font-bold text-white">{usuario}</span></h2>
                <div className="flex">
                    <h3 className="text-white font-bold mt-6 text-xl ">Cuentas</h3>
                    {mostrar ? <SlArrowUp onClick={handlerAcc} className="text-white font-bold mt-7 text-xl cursor-pointer ml-4 hover:text-[#f4521b] " /> : <SlArrowDown onClick={handlerAcc} className="text-white font-bold mt-7 text-xl cursor-pointer ml-4 hover:text-[#f4521b] " />}
                </div>
                {cuentas.map(cuenta =>

                    <ItemCuenta cuenta={cuenta} setmostrar={setmostrar} mostrar={mostrar} />)}
            </div>
        </>
    )
}

export default Cuenta

