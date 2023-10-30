import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import payment from "../image/methods.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-16 md:py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="space-y-8">
            <NavLink to={"/"} className="text-3xl font-bold">
               <span className="text-primary">Multi</span>Mart
            </NavLink>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              dolores.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Solution Section */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase text-gray-400 font-medium tracking-wider">
                Solution
              </h3>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Marketing
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Analytics
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Commerce
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Insights
              </NavLink>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase text-gray-400 font-medium tracking-wider">
                Support
              </h3>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Pricing
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Documentation
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Guides
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Api Status
              </NavLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* Solution Section */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase text-gray-400 font-medium tracking-wider">
                Solution
              </h3>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Marketing
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Analytics
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Commerce
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Insights
              </NavLink>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase text-gray-400 font-medium tracking-wider">
                Support
              </h3>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Pricing
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Documentation
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Guides
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-500 font-medium hover:text-gray-900 block"
              >
                Api Status
              </NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-white">&copy; MultiMart - All rights reserved</p>
          <img src={payment} alt="Payment Methods" className="h-5" />
        </div>
      </div>
    </>
  );
};

export default Footer;
