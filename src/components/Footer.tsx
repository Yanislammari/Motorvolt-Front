import React from "react";
import type { MenuItem } from "../models/structs/MenuItem";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  menuItems: MenuItem[];
}

const Footer: React.FC<FooterProps> = ({ menuItems }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">MotorVolt</h1>
            <p className="text-gray-400 leading-relaxed">Revolutionizing automotive visualization through cutting-edge 3D technology.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {menuItems.filter(mi => mi.showInFooter && mi.section === 'nav').map((item, i) => (
                <p key={i} onClick={() => navigate(item.path)} className="cursor-pointer inline-flex w-fit text-gray-400 hover:text-white transition-colors">{item.label}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              {menuItems.filter(mi => mi.showInFooter && mi.section === 'company').map((item, i) => (
                <p key={i} onClick={() => navigate(item.path)} className="cursor-pointer inline-flex w-fit text-gray-400 hover:text-white transition-colors">{item.label}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex w-fit text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="inline-flex w-fit text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="inline-flex w-fit text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 MotorVolt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
