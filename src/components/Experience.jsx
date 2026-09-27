import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-[#0F1115] relative overflow-hidden">
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
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Industry <span className="text-olive-gradient">Internships</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Practical software engineering and Generative AI experience across web development, database optimization, and AI tools.
          </p>
        </motion.div>

        {/* Clean Spaced Experience Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-craft p-6 sm:p-7 space-y-4 border-l-4 border-l-[#8FAE5D]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#2A303F] pb-3.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-[8px] bg-[#8FAE5D]/15 text-[#8FAE5D] text-sm">
                      <FaBriefcase />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5]">{exp.role}</h3>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-[#A7C97D] flex flex-wrap items-center gap-2 pt-0.5">
                    <span>{exp.company}</span>
                    <span>&bull;</span>
                    <span className="text-[#B8BDC8] flex items-center gap-1">
                      <FaMapMarkerAlt size={11} className="text-[#8FAE5D]" /> {exp.location}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-[8px] bg-[#171A21] text-[#8FAE5D] border border-[#2A303F] flex items-center gap-1.5 shrink-0">
                  <FaCalendarAlt size={11} /> {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#B8BDC8] leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 pt-0.5">
                <h4 className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                  Key Achievements & Responsibilities
                </h4>
                <div className="space-y-1.5">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#B8BDC8] leading-relaxed">
                      <FaCheckCircle className="text-[#8FAE5D] mt-1 shrink-0 text-xs" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-[#2A303F]/50">
                {exp.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-0.5 rounded-[6px] bg-[#0F1115] text-[#B8BDC8] border border-[#2A303F]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
