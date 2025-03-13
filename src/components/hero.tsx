import { useState } from "react";
import IMAGES from "../assets/images";
import DonateForm from "./donateForm";

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
      {showDonate && <DonateForm close={() => setShowDonate(false)} />}
    </section>
  );
};

export default Hero;
