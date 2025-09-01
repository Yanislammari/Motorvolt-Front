import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import menuItems from "../constants/MenuItems";
import heroBannerImg from "../assets/images/hero-banner.avif";
import FeatureCard from "../components/FeatureCard";
import { HiOutlineSparkles } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar menuItems={menuItems} />
      <HeroBanner backgroundImage={heroBannerImg} />
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-thin mb-6">Immersive Technology</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Revolutionary 3D visualization meets automotive excellence</p>
          </div> 
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard icon={<HiOutlineSparkles className="w-10 h-10 text-white" />} title="Real-Time 3D" desccription="Experience photorealistic vehicle rendering with real-time ray tracing and dynamic lighting effects." gradient="bg-gradient-to-r from-blue-500 to-cyan-500" hoverColor="blue" />
            <FeatureCard icon={<HiAdjustments className="w-10 h-10 text-white" />} title="Full Customization" desccription="Configure every detail from paint colors to interior materials with infinite personalization options." gradient="bg-gradient-to-r from-purple-500 to-pink-500" hoverColor="purple" />
            <FeatureCard icon={<HiLightBulb className="w-10 h-10 text-white" />} title="AI Assistance" desccription="Intelligent recommendations and smart configuration suggestions powered by advanced machine learning." gradient="bg-gradient-to-r from-green-500 to-teal-500" hoverColor="green" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
