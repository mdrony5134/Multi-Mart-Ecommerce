import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineHeart, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="py-4  shadow-md bg-slate-200 font-roboto">
        <div className="container  mx-auto flex justify-between items-center">
          <NavLink to={"/"} className="text-3xl font-bold">
            <span className="text-primary">Multi</span>Mart
          </NavLink>
          <div className={`md:flex text-xl items-center gap-6 ${isMenuOpen ? '':'hidden'}`}>
            
            <NavLink to={"/"} >Home</NavLink>
            <NavLink to={"/product"}  >Product</NavLink>
            <NavLink to={"/about"} >About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
           
          </div>
          <div className="flex text-center items-center gap-6">
            <NavLink to={"/wish"} className="relative">
              <div className="text-2xl">
                <AiOutlineHeart />
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                0
              </span>
            </NavLink>
            <NavLink to={"/cart"} className="relative">
              <div className="text-2xl">
                <BsBag />
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                0
              </span>
            </NavLink>

            <NavLink to={"/login"}>
              <div className="text-2xl">
                <AiOutlineLogin />
              </div>
            </NavLink>
          </div>
          <div onClick={toggleMenu} className='text-3xl  right-8 top-6 cursor-pointer md:hidden'>
          {
            isMenuOpen ?  <AiOutlineClose/> : <AiOutlineMenu/>
          }
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
