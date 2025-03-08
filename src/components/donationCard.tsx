import { useState } from "react";
import { CgClose } from "react-icons/cg";
import IMAGES from "../assets/images";

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
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="relative max-w-4xl w-full bg-white mx-auto py-12 px-6 h-full overflow-y-auto">
            {/* Title */}
            <h3 className="text-3xl font-bold text-center mb-8">
              Support HER STEAM
            </h3>
            <CgClose
              className="absolute top-5 right-5"
              onClick={() => setShowForm(false)}
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

            <button
              onClick={() => setShowForm(false)}
              className="w-full mt-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-md font-semibold  transition"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationCard;
