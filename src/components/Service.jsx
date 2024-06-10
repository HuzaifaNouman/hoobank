import CTABtn from "./CTABtn";
import "../main.css";

const Service = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mx-[12em] max-md:mx-[2em] gray-gradient py-[7em] px-10 rounded-xl max-md:py-[2em]">
      <div className="text-white">
        <h2 className="text-5xl font-semibold leading-[1.4] max-lg:text-4xl max-md:text-2xl">
          Let’s try our service now!
        </h2>
        <p className="opacity-70 leading-[1.7] my-4">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <CTABtn />
      </div>
    </div>
  );
};

export default Service;
