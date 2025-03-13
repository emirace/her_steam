import { useState } from "react";
import { CgClose } from "react-icons/cg";

function DonateForm({ close }: { close: () => void }) {
  const [formData, setFormData] = useState({
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://julietibrahim.com/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit donation");

      setSuccess("Thank you for your donation!");
      setFormData({
        amount: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="relative max-w-4xl w-full bg-white mx-auto py-12 px-6 h-full overflow-y-auto">
        <h3 className="text-3xl font-bold text-center mb-8">
          Support HER STEAM
        </h3>
        <CgClose
          className="absolute top-5 right-5 cursor-pointer"
          onClick={close}
        />

        <form onSubmit={handleSubmit}>
          <div className="shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2">Your Donation</h3>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Donation Amount"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border rounded-md p-3 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border rounded-md p-3 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-md p-3 w-full"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border rounded-md p-3 w-full"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message (Optional)"
              className="border rounded-md p-3 w-full h-28 mt-4"
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-4">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-md font-semibold transition"
          >
            {loading ? "Processing..." : "Donate Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonateForm;
