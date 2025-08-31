import React from "react";

interface HeroBannerProps {
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="MotorVolt" className="w-full h-full object-cover scale-110 brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>
      <div className="relative text-center px-6 mx-auto">
        <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight">The Future<span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extralight">Drives Here</span></h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">Experience automotive perfection in immersive 3D. Configure, customize, and visualize your dream vehicle with unprecedented detail.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn btn-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white px-8 py-4 text-lg">Start Experience</button>
          <button className="btn btn-lg btn-outline border-gray-600 hover:bg-gray-800 text-white px-8 py-4 text-lg">Watch Demo</button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
