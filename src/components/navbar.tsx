import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router";
import IMAGES from "../assets/images";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/#about" },
  { name: "JOIN", href: "/#join" },
  { name: "DONATE", href: "/#donate" },
  { name: "CONTACT US", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full ${
        isOpen && "h-full"
      } md:h-auto bg-black/30 backdrop-blur-lg border-b border-white border-opacity-10 z-50 text-white`}
    >
      <div className="mx-auto p-4 px-6 lg:px-20 flex flex-col md:flex-row gap-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto ">
          <Link
            to="/"
            className="flex items-center w-full md:w-auto  gap-2 text-white text-xl font-bold pr-5 py-2  "
          >
            <img src={IMAGES.logo} alt="Logo" className="h-8" />
            HER STEAM
          </Link>
          <div className="text-3xl md:hidden bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg p-1">
            {isOpen ? (
              <IoCloseSharp onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <RiMenu3Fill onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row  items-center  gap-8 md:gap-16 font-medium`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm hover:text-primary hover:scale-105 transition h-full"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex md:pl-5 h-full items-center gap-4`}
        >
          <div onClick={() => setIsOpen(false)}>
            <a
              href="#join"
              className="bg-gradient-to-r from-blue-400 to-purple-400  text-white  px-6 py-2 rounded-full font-medium hover:scale-105 transition"
            >
              Join the Initiative
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
