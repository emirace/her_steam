import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import IMAGES from "../assets/images";

const WhyItMatters = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Addressing Gender Disparities",
      content:
        "Women are significantly underrepresented in STEAM careers across the globe. In Africa, cultural barriers, limited resources, and societal expectations often discourage young girls from pursuing these fields. HER STEAM Initiative provides targeted support, mentorship, and training to bridge this gap.",
    },
    {
      title: "Unlocking Economic Potential",
      content:
        "Research shows that increasing women’s participation in STEAM can boost economic growth and innovation. By empowering girls to pursue these fields, we tap into a wealth of untapped talent, driving progress in Africa.",
    },
    {
      title: "Building Future Leaders",
      content:
        "We’re not just teaching skills—we’re building leaders. Our programs empower young women to take charge, innovate, and lead in their communities.",
    },
    {
      title: "Fostering Problem-Solving and Innovation",
      content:
        "The challenges faced by communities in Africa, such as access to clean water, sustainable agriculture, and health solutions, require innovative approaches. Empowering girls with STEAM skills enables them to develop solutions tailored to local needs.",
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text and Accordion */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
            The Power of HER STEAM Initiative
          </h2>
          <p className=" mt-4 text-lg text-center md:text-left">
            Here’s why this initiative is a game-changer:
          </p>

          {/* Accordion */}
          <div className="mt-8 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-5 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                      : ""
                  } transition-all duration-300`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndex === index && (
                  <div className="p-5 bg-white">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-full">
          <img
            src={IMAGES.image5}
            alt="HER STEAM Initiative"
            className="w-full rounded-lg shadow-lg h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-500 w-3/4 h-3/4 top-10 left-10 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
