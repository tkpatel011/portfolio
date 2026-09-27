import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaCode, FaLaptopCode, FaAward } from 'react-icons/fa';
import { achievementsData } from '../data/portfolioData';

const getAchievementIcon = (category) => {
  switch (category) {
    case 'Academic Excellence':
      return <FaGraduationCap size={18} />;
    case 'Hackathon & Engineering':
      return <FaAward size={18} />;
    case 'Algorithmic Problem Solving':
      return <FaCode size={18} />;
    case 'Competitive Programming':
    default:
      return <FaTrophy size={18} />;
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 sm:py-16 bg-[#171A21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Key <span className="text-olive-gradient">Milestones</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Recognitions across competitive programming, hackathons, software development, and academics.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-craft p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-[10px] bg-[#8FAE5D]/15 text-[#8FAE5D]">
                    {getAchievementIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#0F1115] text-[#A7C97D] border border-[#2A303F]">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#8FAE5D] uppercase tracking-wider">
                  {item.category}
                </div>

                <h3 className="text-lg font-bold text-[#F5F5F5] pt-0.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8BDC8] leading-relaxed pt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2A303F]/50 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{item.date}</span>
                <span className="text-[#8FAE5D] font-bold">{item.highlight}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
