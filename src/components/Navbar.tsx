import React, { useState } from "react";
import menuItems from "../constants/MenuItems";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">MotorVolt</h1>
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="text-white hover:text-blue-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden md:block btn btn-primary bg-blue-600 hover:bg-blue-700 border-none">Configure</button>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <ul className="space-y-3 pt-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="block text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>{item.label}</a>
                </li>
              ))}
              <li className="pt-2">
                <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none w-full">Configure</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
