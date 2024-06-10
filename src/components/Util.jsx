import CTABtn from "./CTABtn";

const Util = () => {
  return (
    <div className="text-white w-[50%] max-xl:w-full">
      <h2 className="text-6xl max-2xl:text-5xl max-xl:text-4xl font-semibold leading-[1.5]">
        You do the business,
        <br />
        we’ll handle the money.
      </h2>
      <p className="opacity-70 w-[70%] leading-7 my-5 max-xl:w-full">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <CTABtn />
    </div>
  );
};

export default Util;
