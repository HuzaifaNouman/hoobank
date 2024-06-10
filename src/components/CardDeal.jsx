import Util from "./Util";
import card from "../assets/card.png";

const CardDeal = () => {
  return (
    <div className="flex justify-evenly items-center ml-[10em] max-xl:flex-wrap max-xl:ml-[1.5em]">
      <Util />
      <div>
        <img className="w-[70%] max-w-[100%] mt-3 max-lg:w-[90%]" src={card} alt="card image" />
      </div>
    </div>
  );
};

export default CardDeal;
