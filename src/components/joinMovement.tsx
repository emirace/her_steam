import { BiCheckCircle } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";
import IMAGES from "../assets/images";
import { useState } from "react";

const JoinMovement = () => {
  const [joined, setJoined] = useState(false);
  const handleSend = async () => {
    try {
      setJoined(true);
    } catch (error) {}
  };
  return (
    <div id="join" className="px-4 md:px-28  p-20">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* Left Side - Heading & Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Join the Movement
          </h2>
          <p className="text-gray-600 my-4 text-lg">
            Are you a young woman with a passion for science, technology,
            engineering, arts, or mathematics? Join the HER STEAM Initiative and
            unlock your potential!
          </p>
        </div>

        {/* Right Side - Benefits & Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <ul className="text-gray-700 space-y-2">
            {[
              "Access to hands-on STEAM training.",
              "Mentorship from accomplished women in STEAM fields.",
              "Opportunities to network with like-minded peers and professionals.",
              "A chance to solve real-world problems in your community.",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <BiCheckCircle className="text-blue-500" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mt-6 ">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={IMAGES.image3}
            alt="Volunteers"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md p-3 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-md p-3 w-full"
              />
              <label className="border rounded-md p-3 w-full flex items-center justify-between cursor-pointer">
                Upload Your CV
                <FaUpload />
                <input type="file" className="hidden" />
              </label>
            </div>
            <textarea
              placeholder="Case Description..."
              className="border rounded-md p-3 w-full h-28"
            ></textarea>
            {joined ? (
              <div className="text-center">
                <div className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Thank you for joining
                </div>
                <div>Our team will reach out to you</div>
              </div>
            ) : (
              <button
                onClick={handleSend}
                className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-full font-semibold"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
