import { PiFilmReel } from "react-icons/pi";
import { BsCameraReels } from "react-icons/bs";
import { FaChromecast } from "react-icons/fa";
import IMAGES from "../assets/images";

const AboutMe = () => {
  return (
    <section className="relative pt-32 md:pt-20 py-20 px-4 lg:px-20 flex flex-col lg:flex-row items-center w-full overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="relative w-full lg:w-2/5 flex ">
        <div className=" rounded-full border border-white border-opacity-20 p-8 w-full h-[90vh]">
          <div className="relative rounded-full  overflow-hidden w-full h-full">
            <img
              src={IMAGES.about}
              alt="About Me"
              className="rounded-full h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-5 left-5 w-10 h-10">
          <PiFilmReel className="text-16" />
        </div>
        <div className="absolute bottom-5 left-5 w-10 h-10">
          <BsCameraReels className="text-16" />
        </div>
        <div className="absolute bottom-5 right-5 w-10 h-10">
          <FaChromecast className="text-16" />
        </div>
      </div>

      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 hidden md:block ">
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-72 w-52 -rotate-[30deg]  " />
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-72 w-52 -rotate-[30deg] -mt-40 mr-5" />
      </div>

      {/* Right Side - Text Section */}
      <div className="lg:w-3/5 mt-12 lg:mt-0 lg:pl-16">
        <h3 className="absolute top-20 md:top-auto md:left-auto left-10 md:block text-purple-500 text-sm uppercase tracking-widest">
          About The Founder
        </h3>
        <h2 className="text-2xl lg:text-4xl font-medium mt-8 leading-tight">
          From the heart of <span className="text-blue-400">Accra</span> to the
          global stage of <span className="text-purple-500">Nollywood</span> and
          beyond, Juliet Ibrahim’s journey is nothing short of extraordinary.
        </h2>
        <p className="relative mt-6 leading-relaxed">
          Her rise from humble beginnings to becoming one of the most celebrated
          figures in African cinema is a testament to passion, perseverance, and
          authentic artistry. With over two decades of captivating performances,
          every role she takes on tells a story of triumph and transformation—a
          narrative that has inspired millions and redefined the essence of
          modern stardom.
        </p>
        <p className="relative mt-6 leading-relaxed">
          Juliet’s influence extends far beyond the silver screen. Her
          commitment to uplifting communities, championing education, and
          advocating for women’s rights shines as brightly as her on-screen
          presence.
        </p>

        <div className="mt-10 flex gap-12">
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className=" text-sm uppercase">Fans Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className=" text-sm uppercase">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
