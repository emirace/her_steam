import IMAGES from "../assets/images";

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative w-full px-6 lg:px-28 gap-8 min-h-[80vh] overflow-hidden flex flex-col lg:flex-row items-center "
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-80 md:h-[80vh] w-full md:w-80 absolute" />
        <img
          src={IMAGES.image1}
          alt="Girls in STEAM activities"
          className="rounded-full w-[30rem] h-[30rem] z-10 object-cover border-2 border-white shadow-2xl my-10"
        />
      </div>

      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 hidden md:block ">
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-72 w-52 -rotate-[30deg]  " />
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-72 w-52 -rotate-[30deg] -mt-40 mr-5" />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left space-y-6 pb-4">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Why HER STEAM Initiative?
        </h2>
        <p className="opacity-80">
          In today’s rapidly evolving world, STEAM (Science, Technology,
          Engineering, Arts, and Mathematics) skills are essential for driving
          innovation and addressing global challenges. However, there remains a
          significant gender disparity in STEAM fields, particularly in Africa.
          This gender gap not only limits the potential of young women but also
          hinders overall societal progress.
        </p>
        <p className="opacity-80">
          Juliet Ibrahim, a passionate advocate for women's empowerment,
          envisions a future where young women in West Africa have equal
          opportunities to excel in Science, Technology, Engineering, Arts, and
          Mathematics. This initiative is her commitment to making that vision a
          reality.
        </p>
        <p className="opacity-80">
          The HER STEAM Initiative is here to change that narrative. We focus on
          empowering girls and young women in Africa to pursue careers in STEAM
          through mentorship, hands-on learning, and community engagement. By
          equipping them with the skills and confidence they need, we’re not
          just shaping futures—we’re transforming communities.
        </p>
        {/* Interactive Element */}
        <div className="mt-8 mb-4">
          <button className="bg-gradient-to-r from-blue-400 to-purple-400  text-white px-6 py-3 rounded-lg shadow-lg">
            Did you know? Only 30% of researchers worldwide are women. In
            Africa, that number is even lower.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
