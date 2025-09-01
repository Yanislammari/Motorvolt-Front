import React from "react";
import type { Rarity } from "../models/entities/Rarity";

interface RarityCardProps {
  rarity: Rarity;
}

const RarityCard: React.FC<RarityCardProps> = ({ rarity }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
      <div className="absolute inset-[1px] bg-gray-900 rounded-xl" />
      <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} opacity-3 group-hover:opacity-8 transition-opacity duration-500`} />
      <div className="relative p-6 text-center">
        <div className="relative mb-4">
          <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} rounded-full blur-md opacity-30 group-hover:opacity-60 transition-all duration-500`} />
          <div className={`relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${rarity.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`} />
        </div>
        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{rarity.label}</h4>
        <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">{rarity.description}</p>
        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{rarity.examples}</p>
        <div className="absolute top-3 right-3">
          <div className={`relative px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-br ${rarity.gradient} text-white shadow-lg`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} rounded-full blur-sm opacity-50`} />
            <span className="relative">{rarity.name.toUpperCase()}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      </div>
    </div>
  );
}

export default RarityCard;
