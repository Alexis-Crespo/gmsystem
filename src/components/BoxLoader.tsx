import { ClimbingBoxLoader, PacmanLoader } from "react-spinners"


const BoxLoader = () => {
    return (
        <>
            <div className=" rounded-xl bg-[#2c2c2b] text-black py-3 px-2   flex flex-wrap  items-center h-[130px] opacity-95 w-[450px] ml-16">
                <p className="mx-auto text-white font-bold text-2xl mt-2 w-full text-center">Probando credenciales</p>
                <div className="flex w-full justify-center items-center ">
                    <PacmanLoader color="#f4521b" />
                </div>
            </div>
        </>
    )
}

export default BoxLoader