import React from "react";

interface RarityExplanationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RarityExplanationCard: React.FC<RarityExplanationCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      {icon}
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default RarityExplanationCard;
