import { testimonials } from "../data";
import "../main.css";

const Testimonials = () => {
  return (
    <>
      <div className="text-white flex flex-wrap justify-around items-center mt-10">
        <h2 className="text-6xl max-xl:text-5xl font-semibold leading-[1.5] max-md:leading-[1.8] max-[400px]:leading-[1.2]">
          What people are <br /> saying about us
        </h2>
        <p className="leading-10 mt-3 opacity-70">
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>

      <div className="text-white flex max-xl:flex-col justify-evenly items-center mt-[8em]">
        {testimonials.map((testimonial) => {
          return (
            <>
              <div
                key={testimonial.id}
                className={`gray-gradient p-4 rounded-2xl w-[25%] my-10 mx-10 max-xl:w-[100%]`}
              >
                <div>
                  <img src={testimonial.icon} alt="qoute" />
                  <p className="w-[100%] my-10 leading-7">
                    {testimonial.content}
                  </p>
                </div>

                <div className={`flex items-center rounded-xl w-[70%]`}>
                  <div>
                    <img
                      className="max-w-[100%] w-[50%] rounded-full object-cover"
                      src={testimonial.image}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <span className="text-lg font-semibold">
                      {testimonial.name}
                    </span>
                    <p className="opacity-70 leading-7">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Testimonials;
