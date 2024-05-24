import React from "react";
import HeroPng from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                PREPARE TO EMBARK ON IMMERSIVE {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  ROBOTIC ADVENTURES WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Lets Go!
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="w-screen" />
            </div>
          </div>
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;