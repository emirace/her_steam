import { useState } from "react";
import IMAGES from "../assets/images";
import { CgClose } from "react-icons/cg";

const Hero = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-top p-4 py-24 md:px-28"
      style={{
        backgroundImage: `url(${IMAGES.image2})`,
      }}
    >
      <div className="absolute inset-0 bg-background bg-opacity-50"></div>
      <div
        className="absolute w-4/5 md:w-3/5 left-0 top-0 h-full bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0 100%)" }}
      />
      <div className="absolute -left-[10%] top-1/2 -translate-y-1/2 hidden md:block">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-72 w-52 rotate-[30deg] z-10 relative" />
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-72 w-52 rotate-[30deg] -mt-40 ml-5 " />
      </div>
      <div className="md:w-3/5 text-white relative z-20 ">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
          Empowering Girls, Shaping Futures, Transforming Communities through
          STEAM.
        </h1>
        <p className="mb-6">
          Join us in bridging the gender gap in Science, Technology,
          Engineering, Arts, and Mathematics (STEAM) across Africa. Together, we
          can unlock potential, drive innovation, and create a brighter future.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => setShowDonate(true)}
            className="bg-gradient-to-r from-blue-400 to-purple-400 p-0.5 rounded-full font-bold text-lg"
          >
            <div className="bg-background rounded-full px-6 py-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Support the Movement
              </span>
            </div>
          </button>
          <a
            href="/#join"
            className="bg-gradient-to-r from-blue-400 flex items-center justify-center to-purple-400 text-center px-6 py-3 rounded-full font-bold text-lg"
          >
            Join the Initiative
          </a>
        </div>
      </div>
      {showDonate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="relative max-w-4xl w-full bg-white mx-auto py-12 px-6 h-full overflow-y-auto">
            {/* Title */}
            <h3 className="text-3xl font-bold text-center mb-8">
              Support HER STEAM
            </h3>
            <CgClose
              className="absolute top-5 right-5"
              onClick={() => setShowDonate(false)}
            />

            <div className=" shadow-lg rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Your Donation</h3>
              <input
                type="number"
                placeholder="Enter Donation Amount"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Details Form */}
            <div className="shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-md p-3 w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border rounded-md p-3 w-full"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border rounded-md p-3 w-full h-28 mt-4"
              ></textarea>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-md font-semibold  transition">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
