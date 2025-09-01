import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import menuItems from "../constants/MenuItems";
import heroBannerImg from "../assets/images/hero-banner.avif";
import FeatureCard from "../components/FeatureCard";
import RarityCard from "../components/RarityCard";
import type { Rarity } from "../models/entities/Rarity";
import { HiOutlineSparkles } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import RarityExplanationCard from "../components/RarityExplanationCard";
import { TbChartBar, TbLock, TbTargetArrow } from "react-icons/tb";

const Home: React.FC = () => {
  const rarities: Rarity[] = [
    {
      name: 'gray',
      label: 'Common',
      description: 'Everyday vehicles',
      examples: 'City cars, Standard sedans',
      gradient: 'from-gray-400 to-gray-500'
    },
    {
      name: 'black',
      label: 'Luxury',
      description: 'Premium models',
      examples: 'Premium sedans, Luxury SUVs',
      gradient: 'from-gray-700 to-black'
    },
    {
      name: 'black-red',
      label: 'Prized',
      description: 'Sports collection',
      examples: 'Sports cars, Performance coupes',
      gradient: 'from-gray-800 to-red-700'
    },
    {
      name: 'white-gold',
      label: 'Very Rare',
      description: 'Limited edition',
      examples: 'Limited editions, Supercars',
      gradient: 'from-white to-yellow-400'
    },
    {
      name: 'blue-gold',
      label: 'Special',
      description: 'Reprogrammed',
      examples: 'Custom builds, Electric hypercars',
      gradient: 'from-blue-400 to-yellow-400'
    },
    {
      name: 'black-gold',
      label: 'Ultra Rare',
      description: 'Legendary status',
      examples: 'One-offs cars, Concept cars',
      gradient: 'from-black to-yellow-400'
    }
  ];

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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-thin mb-6">Rarity System</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Each vehicle is classified by its exclusivity and performance. Discover legendary automotive masterpieces across six distinct rarity tiers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {rarities.map((rarity) => (
              <RarityCard key={rarity.name} rarity={rarity} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">How Rarity Works</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <RarityExplanationCard icon={<TbTargetArrow className="text-2xl mb-3" />} title="Performance Based" description="Rarity is determined by vehicle performance, exclusivity, and real-world availability." />
                <RarityExplanationCard icon={<TbLock className="text-2xl mb-3" />} title="Unlock Features" description="Higher rarity vehicles unlock exclusive audio, customization options, and 3D experiences." />
                <RarityExplanationCard icon={<TbChartBar className="text-2xl mb-3" />} title="Visual Hierarchy" description="Each tier has distinct visual styling and effects to showcase your collection's prestige." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
