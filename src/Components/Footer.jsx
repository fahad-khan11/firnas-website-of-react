import React from "react";
import Page3 from "./Page3";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#081c41] pb-36">
      <div className="pt-40 pl-44 pr-44 pb-16">
        <h1 className="text-4xl font-bold text-white">
          Global office locations
        </h1>
      </div>
      <div className="flex flex-row min-h-[600px]">
        <div>
          <Page3
            image="/Images6/img1.png"
            heading={<h1>PAKISTAN OFFICE</h1>}
            paragraph={
              <p>
                Firnas tech, Javeed Shaheed Rd, Near COMSATS University,
                Mandian, Abbottabad.
              </p>
            }
            icon={<FaPhoneAlt />}
            no={<p>+92 (312) 068 3400</p>}
          />
        </div>
        <div>
          <Page3
            image="/Images6/img2.png"
            heading={<h1>USA OFFICE</h1>}
            paragraph={
              <p className="py-3">
                400, Capitol Mall, Sacramento, California, USA
              </p>
            }
            icon={<FaPhoneAlt />}
            no={<p>+1 (650) 353 8485</p>}
          />
        </div>
        <div>
          <Page3
            image="/Images6/img3.png"
            heading={<h1>UK OFFICE</h1>}
            paragraph={
              <p className="py-3">260 Bastable Avenue, Barking, London, UK</p>
            }
            icon={<FaPhoneAlt />}
            no={<p>+44 (786) 316 37 71</p>}
          />
        </div>
        <div>
          <Page3
            image="/Images6/img4.png"
            heading={<h1>SWEDEN OFFICE</h1>}
            paragraph={
              <p>Malmvägen 2B , 19161 Sollentuna Sweden, Stockholm, Sweden</p>
            }
            icon={<FaPhoneAlt />}
            no={<p>+46 (73) 729 55 89</p>}
          />
        </div>
      </div>

      <div className="mt-20 mb-20 w-full">
        <hr className="border-t border-gray-500 my-4" />
      </div>
      <div className="flex flex-row justify-between pr-23">
        <div className="flex flex-col pl-40 justify-between gap-8">
          <p className="text-gray-400 text-4xl">Contact</p>
          <h2 className="text-gray-400 text-5xl">+92 312 068 3400</h2>
          <h2 className="text-gray-400 text-5xl">info@firnas.tech</h2>
        </div>
        <div className="mt-28">
          <img
            src="/Images/firnas.png"
            alt=""
            className="w-[300px] h-[120px]"
          />
        </div>
        <div className="mr-28">
          <div className="flex flex-col justify-between text-white p-[20px]">
            <ul className="flex flex-row items-center gap-8 mr-4 mt-20">
              <li className="text-5xl">
                <FaFacebook />
              </li>
              <li className="text-5xl">
                <FaInstagram />
              </li>
              <li className="text-5xl">
                <FaLinkedin />
              </li>
            </ul>
          </div>
          <p className="text-white">
            © 2024 Firnas.tech (Pvt) Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
