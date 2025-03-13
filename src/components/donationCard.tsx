import { useState } from "react";
import IMAGES from "../assets/images";
import DonateForm from "./donateForm";

const DonationCard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="donate" className="p-4 md:px-28">
      <div className="bg-background rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center shadow-lg">
        <div className="relative w-full md:w-1/2">
          <img
            src={IMAGES.image6}
            alt="Hope"
            className="rounded-xl w-full h-72 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#1E1E88] rounded-xl scale-105"></div>
        </div>

        <div className="w-full md:w-1/2 p-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Be Part of the Change
          </h2>
          <p className=" mt-4">
            Your support can transform lives. By investing in the HER STEAM
            Initiative, you’re not just donating—you’re empowering the next
            generation of female innovators, leaders, and problem-solvers.
          </p>

          <button
            className="mt-5 bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-3 rounded-full font-semibold shadow-lg transition"
            onClick={() => setShowForm(true)}
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Pop-up Form */}
      {showForm && <DonateForm close={() => setShowForm(false)} />}
    </div>
  );
};

export default DonationCard;
