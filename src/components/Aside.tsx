import { CiShare2 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { GrTest } from "react-icons/gr";

// bg-[#2C3333]
export const Aside = () => {
  return (

    <>
      <div className="h-[100vh] w-[80px] bg-gradient-to-b from-[#d7d7cd] via-[#555555] via-[#999999] via-[#cccccc] to-[#f0e9e9] flex justify-end ">
        <div className=" w-[70px] h-[10vh] flex flex-wrap mt-20">
          <div className="w-full border-slate-300   py-1 hover:bg-[#f0e9e9] rounded-bl-xl rounded-tl-xl  group mb-6 ">
            <CiCircleList className="text-[#f4521b] text-[50px] ml-2 mt-3 relative -top-1  group-hover:text-[#f4521b] " />
          </div>
          <div className="w-full border-slate-300   py-1 hover:bg-[#f0e9e9] rounded-bl-xl rounded-tl-xl  group mb-6 ">
            <CiShare2 className="text-black text-[50px] ml-2 mt-3 relative -top-1  group-hover:text-[#f4521b] " />
          </div>
          <div className="w-full border-slate-300   py-1 hover:bg-[#f0e9e9] rounded-bl-xl rounded-tl-xl  group mb-6 ">
            <a href="/test"> <GrTest className="text-black text-[30px] ml-4 mt-3 relative -top-1 cursor-pointer group-hover:text-[#f4521b] " /></a>
          </div>
        </div>
      </div>
    </>
  );
};
