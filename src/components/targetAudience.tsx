import { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import IMAGES from "../assets/images";

const TargetAudience = () => {
  // Sample data for gallery images with hover bios
  const audienceMembers = [
    {
      id: 1,
      name: "Amina, 19",
      role: "Aspiring Engineer",
      story:
        "Amina discovered her passion for robotics through our mentorship program.",
      img: IMAGES.image,
    },
    {
      id: 2,
      name: "Nana, 22",
      role: "Coding Enthusiast",
      story:
        "Nana built her first mobile app after attending our STEAM workshop.",
      img: IMAGES.image7,
    },
    {
      id: 3,
      name: "Sarah, 17",
      role: "Future Scientist",
      story:
        "Sarah's dream is to research renewable energy solutions for Africa.",
      img: IMAGES.image8,
    },
  ];

  return (
    <section className="relative bg-background py-16 px-8 md:px-28 text-white">
      <div className="absolute -left-[10%] top-1/2 -translate-y-1/2 ">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-72 w-52 rotate-[30deg] z-10 relative" />
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-72 w-52 rotate-[30deg] -mt-40 ml-5 " />
      </div>
      <div className=" text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Serve</h2>

        {/* Description */}
        <p className="text-lg max-w-2xl mx-auto mb-8">
          The HER STEAM Initiative is designed for:
        </p>

        {/* Audience List */}
        <ul className="text-lg space-y-4 text-left max-w-xl mx-auto">
          <li className="flex items-start gap-2">
            <BiCheckCircle className="text-blue-400 text-lg" size={20} />
            Girls aged 16-25 in both urban and rural areas of West Africa.
          </li>
          <li className="flex items-start gap-2">
            <BiCheckCircle className="text-blue-400 text-lg" size={20} />
            Schools, community centers, and local NGOs that support education
            and empowerment.
          </li>
          <li className="flex items-start gap-2">
            <BiCheckCircle className="text-blue-400 text-lg" size={20} />
            Teachers, school administrators, and community leaders who encourage
            young women to pursue STEAM.
          </li>
        </ul>

        {/* Interactive Photo Gallery */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {audienceMembers.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Profile Card with Hover Effect
const ProfileCard = ({ member }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Profile Image */}
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
      />

      {/* Hover Bio */}
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300">
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-sm">{member.role}</p>
          <p className="text-xs mt-2">{member.story}</p>
        </div>
      )}
    </div>
  );
};

export default TargetAudience;
