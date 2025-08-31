import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import menuItems from "../constants/MenuItems";
import heroBannerImg from "../assets/images/hero-banner.avif";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar menuItems={menuItems} />
      <HeroBanner backgroundImage={heroBannerImg} />
    </div>
  );
};

export default Home;
