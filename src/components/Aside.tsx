import { CiShare2 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";

export const Aside = () => {
  return (
    <>
      <div className="h-[100vh] w-[80px] bg-black opacity-85 flex justify-end ">
        <div className=" w-[70px] h-[10vh] flex flex-wrap mt-20">
          <div className="w-full border-slate-300 bg-black py-1 hover:bg-white rounded-bl-xl rounded-tl-xl  group mb-6 ">
            <CiCircleList className="text-[#f4521b] text-[50px] ml-2 mt-3 relative -top-1  group-hover:text-[#f4521b] " />
          </div>
          <div className="w-full border-slate-300 bg-black py-1 hover:bg-white rounded-bl-xl rounded-tl-xl  group mb-6 ">
            <CiShare2 className="text-[#f4521b] text-[50px] ml-2 mt-3 relative -top-1  group-hover:text-[#f4521b] " />
          </div>
        </div>
      </div>
    </>
  );
};
