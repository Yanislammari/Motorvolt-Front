import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desccription: string;
  gradient: string;
  hoverColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desccription, gradient, hoverColor }) => {
  return (
    <div className={`group text-center p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-${hoverColor}-500 transition-all duration-500 hover:transform hover:scale-105`}>
      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${gradient}`}>{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desccription}</p>
    </div>
  );
}

export default FeatureCard;
