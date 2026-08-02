import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#171A21] border-t border-[#2A303F] py-10 text-[#B8BDC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] bg-[#1D212B] border border-[#2A303F] flex items-center justify-center text-[#8FAE5D] font-bold text-base">
              TK
            </div>
            <div>
              <div className="text-base font-bold text-[#F5F5F5]">Tej Kalola</div>
              <div className="text-xs text-[#B8BDC8]">Computer Science & Full Stack Developer</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-[#8FAE5D] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#8FAE5D] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#8FAE5D] transition-colors">Projects</a>
            <a href="#competitive-programming" className="hover:text-[#8FAE5D] transition-colors">CP Stats</a>
            <a href="#experience" className="hover:text-[#8FAE5D] transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-[#8FAE5D] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#8FAE5D] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={personalDetails.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-[8px] bg-[#1D212B] border border-[#2A303F] text-[#F5F5F5] hover:text-[#8FAE5D] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={14} />
            </a>

            <a 
              href={personalDetails.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-[8px] bg-[#1D212B] border border-[#2A303F] text-[#F5F5F5] hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>

            <a 
              href={personalDetails.socials.email}
              className="p-2 rounded-[8px] bg-[#1D212B] border border-[#2A303F] text-[#F5F5F5] hover:text-[#8FAE5D] transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={14} />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-[#2A303F]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Tej Kalola. All rights reserved.
          </div>
          <div>
            Handcrafted & Minimal Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
