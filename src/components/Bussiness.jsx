import { bussinessData } from "../data";
import Util from "./Util";

import "../main.css";

const Bussiness = () => {
  return (
    <div className="mt-[5em]">
      <div className="flex max-xl:flex-wrap justify-evenly max-xl:justify-start items-center ml-[10em] max-2xl:ml-[7em] max-xl:mx-[1.5em]">
        <Util />
        <div className="text-white py-5 my-4">
          {bussinessData.map((data) => {
            return (
              <div
                className={`${
                  data.id == "bussiness-2" ? "gray-gradient" : ""
                } flex items-center my-5 p-2 rounded-xl w-[70%] max-xl:w-full`}
                key={data.id}
              >
                <div className="rounded-full bg-gray-700 p-2 mr-4">
                  <img src={data.icon} alt="icon" />
                </div>
                <div>
                  <span className="text-lg font-semibold">{data.title}</span>
                  <p className="opacity-70 leading-7">{data.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
