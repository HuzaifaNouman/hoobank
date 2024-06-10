import { bussinessModelData } from "../data";

const BussinessModel = () => {
  return (
    <div className="flex justify-evenly items-center flex-wrap py-[5em]">
      {bussinessModelData.map((data) => {
        return (
          <div key={data.id}>
            <img className="mx-5 my-5" src={data.image} alt="bussiness model data" />;
          </div>
        );
      })}
    </div>
  );
};

export default BussinessModel;
