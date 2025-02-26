import { useState, useEffect } from "react";

const MissionObjectives = () => {
  const [progress, setProgress] = useState(0);

  // Simulating progress data update
  useEffect(() => {
    const timer = setTimeout(() => setProgress(5000), 1000); // Example: 5000 girls empowered
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-background text-white py-20 px-4 md:px-28">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Mission and Goals
          </h2>

          {/* Mission Statement */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empower young women and girls in Africa to pursue careers in
            Science, Technology, Engineering, Arts, and Mathematics (STEAM)
            through education, mentorship, and community engagement.
          </p>
          <div className="mb-6 text-center mt-4">
            <p className="text-lg font-semibold ">
              <span className="text-purple-700">
                {progress.toLocaleString()}
              </span>{" "}
              girls empowered and counting!
            </p>
            <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-full transition-all duration-500"
                style={{ width: `${Math.min(progress / 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
        {/* Objectives List */}
        <div className=" grid md:grid-cols-2 gap-6 md:w-2/3">
          <ObjectiveCard
            color="bg-blue-400"
            title="Increase Participation"
            description="Boost the number of young women and girls aged 16-25 in STEAM education and careers."
          />
          <ObjectiveCard
            color="bg-purple-500"
            title="Skill Development"
            description="Provide hands-on learning opportunities in various STEAM disciplines."
          />
          <ObjectiveCard
            color="bg-blue-400 md:bg-purple-500"
            title="Mentorship & Networking"
            description="Connect participants with accomplished female professionals in STEAM fields."
          />
          <ObjectiveCard
            color="bg-purple-500 md:bg-blue-400"
            title="Community Engagement"
            description="Raise awareness and encourage community support for women in STEAM."
          />
        </div>
      </div>
    </section>
  );
};

// Objective Card Component
const ObjectiveCard = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div
      className={`${color} h-48 flex flex-col gap-4 p-8 justify-center items-center text-center rounded-lg `}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default MissionObjectives;
