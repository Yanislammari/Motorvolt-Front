import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";
import menuItems from "../constants/MenuItems";
import heroBannerImg from "../assets/images/hero-banner.avif";
import carSound from "../assets/sounds/car_sound.mp3";
import FeatureCard from "../components/FeatureCard";
import RarityCard from "../components/RarityCard";
import raritiesData from "../assets/mocks/rarities.json";
import carsData from "../assets/mocks/cars.json";
import type { Rarity } from "../models/entities/Rarity";
import type { Car } from "../models/entities/Car";
import { HiOutlineSparkles } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import RarityExplanationCard from "../components/RarityExplanationCard";
import { TbChartBar, TbLock, TbTargetArrow } from "react-icons/tb";
import CtaStartTrial from "../components/CtaStartTrial";

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const rarities: Rarity[] = (raritiesData as Rarity[]);
  const rarityByName = Object.fromEntries((rarities as Rarity[]).map(r => [r.name, r]));
  const cars: Car[] = (carsData as any[]).map((c) => ({
    id: c.id,
    model: c.model,
    type: c.type,
    rarity: rarityByName[c.rarity as keyof typeof rarityByName] as Rarity,
    edition: c.edition,
    cover: c.cover,
    speed: c.speed,
    weight: c.weight,
    acceleration: c.acceleration,
    sounds: (c.sounds || []).map((s: string) => (s === 'car_sound' ? carSound : s))
  }));

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

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
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-thin mb-6">Vehicle Collection</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover our exclusive automotive masterpieces across all rarity tiers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} onClick={handleCarClick}/>
            ))}
          </div>
        </div>
      </section>
      {selectedCar && (
        <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeModal}/>
      )}
      <CtaStartTrial />
    </div>
  );
};

export default Home;
