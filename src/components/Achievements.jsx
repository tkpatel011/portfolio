import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaCode, FaBriefcase } from 'react-icons/fa';
import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#171A21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Key <span className="text-olive-gradient">Milestones</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Recognitions across competitive programming, software development, and academics.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              className="card-craft p-5 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-[10px] bg-[#8FAE5D]/15 text-[#8FAE5D]">
                    {index === 0 && <FaTrophy size={16} />}
                    {index === 1 && <FaCode size={16} />}
                    {index === 2 && <FaBriefcase size={16} />}
                    {index === 3 && <FaGraduationCap size={16} />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0F1115] text-[#A7C97D] border border-[#2A303F]">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-[#8FAE5D] uppercase tracking-wider">
                  {item.category}
                </div>

                <h3 className="text-base font-bold text-[#F5F5F5] pt-0.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#B8BDC8] leading-relaxed pt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-[#2A303F]/50 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>{item.date}</span>
                <span className="text-[#8FAE5D] font-bold">{item.highlight}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
