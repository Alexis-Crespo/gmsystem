import { RegisterBox } from "./../../components/RegisterBox";
import "./../login.css";

export default function Login() {
  return (
    <>
      <div className="w-[900px] -mt-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,288L48,256C96,224,192,160,288,154.7C384,149,480,203,576,213.3C672,224,768,192,864,181.3C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <RegisterBox />

      <div className="w-full  absolute bottom-0">
        <div className="bg-[#f4521b] h-[30px] w-[30px] rounded-full ml-60 -mb-2 2xl:h-[60px] 2xl:w-[60px]">
          .
        </div>
        <div className=" bg-[#f4521b] h-[120px] w-[120px] rounded-full ml-16 -mb-16 2xl:h-[200px] 2xl:w-[200px] 2xl:-mb-32">
          .
        </div>
        <div className="w-[800px] right-0  absolute h-48 bottom-0 -mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f4521b"
              fill-opacity="1"
              d="M0,256L48,250.7C96,245,192,235,288,224C384,213,480,203,576,170.7C672,139,768,85,864,80C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
