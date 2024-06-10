import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import bill from "../assets/bill.png";

const Billing = () => {
  return (
    <div className="flex max-xl:flex-wrap max-xl:flex-col-reverse justify-between items-center mx-[10em] max-lg:mx-[1.5em] py-[3em] max-md:mx-[1em]">
      <div className="flex justify-center items-center">
        <img
          className="max-w-[100%] w-[80%] max-lg:w-[90%]"
          src={bill}
          alt="bill cards"
        />
        <div className="absolute -left-1/2 z-[2] w-[60%] h-[60%] white-gradient pink-gradient" />
      </div>
      <div className="text-white w-[50%] mb-3 max-md:w-[100%]">
        <h2 className="text-6xl font-semibold leading-[1.4] max-xl:leading-[1.3] max-2xl:text-4xl max-xl:text-4xl">
          Easily control your <br className="block max-lg:hidden" /> billing &
          invoicing.
        </h2>
        <p className="opacity-70 w-[60%] max-2xl:w-[100%] my-5 leading-7">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex">
          <img className="mr-3" src={apple} alt="app store" />
          <img src={google} alt="google store" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
