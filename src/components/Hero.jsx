import discount from "../assets/discount.svg";
import robot from "../assets/robot.png";

import "../main.css";

const Hero = () => {
  return (
    <div className="text-white flex max-lg:flex-col flex-wrap justify-between items-center mx-10 mt-12 max-md:mt-10 max-md:mx-0">
      <div className="left | pl-[10em] max-lg:pl-0">
        <div className="flex items-center justify-start text-lg bg-gradient-to-br from-[#11101D] to-[#272727] w-fit p-1 rounded-lg mb-4">
          <img src={discount} alt="discount icon" />
          <p className="px-1 uppercase">
            20% <span className="opacity-70">discount for</span> 1 month
            <span className="opacity-70"> account</span>
          </p>
        </div>
        <div className="overflow-hidden bg-transparent relative my-6 max-lg:4xl max-xl:text-5xl max-2xl:text-6xl text-8xl font-semibold text-nowrap max-md:text-wrap">
          <h2 className="text1">The Next </h2>
          <h2 className="text2 | secondary-color my-5">Generation</h2>
          <h2 className="text3 | leading-tight">Payment Method.</h2>
          <div className="absolute z-[0] top-0 w-[80%] h-[35%] white-gradient" />
        </div>
        <p className="max-w-[450px] text-sm md:text-md leading-7 opacity-70 font-normal">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="right | flex-1 max-sm:hidden relative">
        <img
          className="max-w-[100%] w-[100%]"
          src={robot}
          alt="robot hand image"
        />
        <div className="flex flex-1 max-sm:hidden">
          <div className="absolute z-[0] top-0 w-[30%] h-[35%] pink-gradient" />
          <div className="absolute z-[1] bottom-0 w-[60%] h-[35%] white-gradient" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
