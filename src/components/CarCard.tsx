import React from "react";
import type { Car } from "../models/entities/Car";
import { TbLock } from "react-icons/tb";

interface CarCardProps {
  car: Car;
  onClick?: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div className="relative group">
      {(['black-red','white-gold','blue-gold','black-gold'].includes(car.rarity.name)) && (
        <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${car.rarity.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
      )}
      <div className={`relative rounded-2xl p-px bg-gradient-to-br ${car.rarity.gradient} ${(['black-red','white-gold','blue-gold','black-gold'].includes(car.rarity.name)) ? 'opacity-70 group-hover:opacity-100' : 'opacity-30 group-hover:opacity-60'} transition-opacity duration-300`}>
        <div onClick={() => onClick?.(car)} className="relative overflow-hidden rounded-[14px] bg-gray-900 transition-all duration-500 cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img src={car.cover} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <button onClick={(e) => e.stopPropagation()} className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 bg-gray-800/80 text-gray-400 hover:bg-gray-700"><TbLock className="w-4 h-4" /></button>
            <div className="absolute top-4 left-4">
              <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${car.rarity.gradient} text-white shadow-lg`}>
                {car.rarity.label.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="px-6 pt-6 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">{car.model}</h3>
              <small className="text-sm text-gray-400">Édition Spéciale</small>
            </div>
            <p className="text-sm text-gray-400">{car.edition}</p>
            <p className="text-sm text-gray-500">{car.type}</p>
            <dl className="grid grid-cols-3 gap-4 mb-4 pt-4">
              <div className="text-center">
                <dt className="text-xs text-gray-500">HP</dt>
                <dd className="text-lg font-bold text-white">{car.speed}</dd>
              </div>
              <div className="text-center">
                <dt className="text-xs text-gray-500">0-100</dt>
                <dd className="text-lg font-bold text-white">{car.acceleration}</dd>
              </div>
              <div className="text-center">
                <dt className="text-xs text-gray-500">km/h</dt>
                <dd className="text-lg font-bold text-white">{car.weight}</dd>
              </div>
            </dl>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-green-400">Déverrouillé</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
