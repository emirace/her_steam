import { BiCheckCircle } from "react-icons/bi";
import { FaUpload, FaCheckCircle } from "react-icons/fa";
import IMAGES from "../assets/images";
import { useState } from "react";

const JoinMovement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFormData({ ...formData, file: e.target.files[0] });
      setFileUploaded(true); // Show uploaded notice
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      const response = await fetch("https://julietibrahim.com/api/join", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setJoined(true);
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="join" className="px-4 md:px-28 p-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
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

        {/* Right Side - Benefits */}
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

      <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
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
          <form onSubmit={handleSend} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
                required
              />
              <div>
                <label className="border rounded-md p-3 w-full flex items-center justify-between cursor-pointer">
                  Upload Your CV
                  <FaUpload />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                {fileUploaded && (
                  <p className="text-green-500 mt-2 flex items-center">
                    <FaCheckCircle className="mr-2" /> {formData.file?.name}{" "}
                    uploaded successfully!
                  </p>
                )}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Case Description..."
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md p-3 w-full h-28"
              required
            ></textarea>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {joined ? (
              <div className="text-center">
                <div className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Thank you for joining
                </div>
                <div>Our team will reach out to you</div>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-full font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
