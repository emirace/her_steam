import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import IMAGES from "../assets/images";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & About */}
        <div>
          {/* <h2 className="text-2xl font-bold flex items-center gap-2 space-x-2">
            <span className="text-white">HER</span>STEAM.
          </h2> */}
          <img src={IMAGES.logo2} alt="Logo" className="h-10" />

          <p className="text-gray-300 mt-3">
            {" "}
            We are committed to making a difference through donations. Your
            contributions help us continue our mission.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#donate" className="text-gray-300 hover:text-white">
                Donate
              </a>
            </li>
            <li>
              <a href="#join" className="text-gray-300 hover:text-white">
                Join Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/hersteaminitiative?igsh=cWdjM29zNDJma200"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaGooglePlusG className="text-lg" />
            </a>
          </div>
          <div className="mt-3 space-y-2">
            {/* <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>28 Street, New York City, USA</span>
  </p> */}
            <div className="flex  space-x-2">
              <FaPhone className="text-purple-400 mt-1" />
              <div>
                <div>Canada: +1 (437) 860 7008</div>
                <div>USA: +1817 381 5340</div>
                <div>Ghana: +233 267 065 858</div>
                <div>Nigeria: +234 815 772 9057</div>
              </div>
            </div>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-purple-400" />{" "}
              <span>foundation@hersteaminitiative.org</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HER STEAM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
