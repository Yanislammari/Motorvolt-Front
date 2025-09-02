import React from "react";
import type { Car } from "../models/entities/Car";

interface CarModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog className="modal modal-open">
      <div className="modal-box relative p-0 max-w-2xl bg-base-100 text-base-content border border-base-300/20 rounded-2xl overflow-hidden">
        <div className="relative aspect-[16/8]">
          <img src={car.cover} alt={car.model} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-base-100/95" />
          <div className="absolute top-4 left-4">
            <div className={`badge badge-sm bg-gradient-to-br ${car.rarity.gradient} text-white border-0 shadow-md`}>{car.rarity.label.toUpperCase()}</div>
          </div>
          <button aria-label="Fermer" onClick={onClose} className="btn btn-sm btn-circle absolute right-4 top-4 bg-black/50 hover:bg-black/70 text-white border-0">✕</button>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end gap-3">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white drop-shadow">{car.model}</h3>
              <p className="text-xs md:text-sm text-gray-200/90 mt-0.5 drop-shadow">{car.edition}</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-primary normal-case">Voir en 3D</button>
              <button className={`btn btn-sm btn-info normal-case text-white`}>Ajouter au Garage</button>
            </div>
          </div>
        </div>
        <div className={`h-[2px] bg-gradient-to-br ${car.rarity.gradient}`} />
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-200/20 border border-base-300/30">
              <div className="card-body p-5">
                <h4 className="card-title text-base">Spécifications</h4>
                <div className="mt-2 space-y-3 text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-base-300/30"><span className="text-base-content/60">Puissance</span><span className="font-medium">{car.speed} CH</span></div>
                  <div className="flex items-center justify-between pb-2 border-b border-base-300/30"><span className="text-base-content/60">0-100 km/h</span><span className="font-medium">{car.acceleration} s</span></div>
                  <div className="flex items-center justify-between pb-2 border-b border-base-300/30"><span className="text-base-content/60">Poids</span><span className="font-medium">{car.weight} kg</span></div>
                  <div className="flex items-center justify-between"><span className="text-base-content/60">Type</span><span className="font-medium text-right">{car.type}</span></div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200/20 border border-base-300/30">
              <div className="card-body p-5">
                <h4 className="card-title text-base">Sons du Moteur</h4>
                {(car.sounds || []).slice(0, 2).map((src, idx) => (
                  <div key={idx} className="space-y-2">
                    <audio controls className="w-full">
                      <source src={src} />
                    </audio>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default CarModal;
