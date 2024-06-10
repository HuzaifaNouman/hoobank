import logo from "../assets/logo.svg";
import { footerLinks, footerIcons } from "../data";

const Footer = () => {
  return (
    <div className="bg-[#0B0A0C] text-white mt-[5em] p-5">
      <div className="flex flex-wrap justify-evenly max-md:justify-start items-center">
        <div>
          <img
            className="w-[50%] object-cover"
            src={logo}
            alt="footer's logo"
          />
          <p className="opacity-70 my-5 leading-7">
            A new way to make the payments easy, <br /> reliable and secure.
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap justify-between">
            {footerLinks.map((data) => {
              return (
                <div className="mx-12 max-sm:mx-2" key={data.id}>
                  <h3 className="text-2xl font-semibold my-3">{data.title}</h3>
                  {data.links.map((link) => (
                    <a href="/">
                      <li className="opacity-70 py-1">{link}</li>
                    </a>
                  ))}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="my-5 opacity-70" />
      <div className="flex flex-wrap max-md:flex-col-reverse justify-between max-md:justify-start items-center">
        <p>
          2021 HooBank. Ⓒ Developed by{" "}
          <span className="font-semibold secondary-color">Huzaifa Nouman</span>
        </p>
        <div className="flex justify-center items-center gap-5 my-5">
          {footerIcons.map((icon) => {
            return (
              <a href="/">
                <img src={icon} alt="footer icons" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
