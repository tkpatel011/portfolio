import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'CP Stats', href: '#competitive-programming' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0F1115]/95 backdrop-blur-md border-b border-[#2A303F]/60 py-3 shadow-md shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-[12px] bg-[#1D212B] border border-[#2A303F] flex items-center justify-center text-[#8FAE5D] font-bold text-lg group-hover:border-[#8FAE5D] transition-colors">
            TK
          </div>
          <div className="flex flex-col">
            <span className="text-[#F5F5F5] font-bold tracking-tight text-base group-hover:text-[#A7C97D] transition-colors">
              Tej Kalola
            </span>
            <span className="text-[11px] text-[#B8BDC8] font-mono">
              &lt;CS_Dev /&gt;
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#171A21]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2A303F]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive 
                    ? 'text-[#F5F5F5] bg-[#1D212B] border border-[#8FAE5D]/40' 
                    : 'text-[#B8BDC8] hover:text-[#F5F5F5] hover:bg-[#1D212B]/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0F1115] bg-[#8FAE5D] hover:bg-[#A7C97D] rounded-[12px] transition-colors cursor-pointer"
          >
            <FaEnvelope className="text-xs" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-[10px] bg-[#1D212B] border border-[#2A303F] text-[#F5F5F5] hover:text-[#8FAE5D] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171A21] border-b border-[#2A303F] px-6 py-5 shadow-2xl mt-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-[10px] text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#1D212B] text-[#8FAE5D] border border-[#8FAE5D]/30'
                    : 'text-[#B8BDC8] hover:bg-[#1D212B] hover:text-[#F5F5F5]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
