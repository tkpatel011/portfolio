import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0F1115] relative overflow-hidden">
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
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Industry <span className="text-olive-gradient">Internship</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Practical software engineering experience building RESTful APIs and optimized React components.
          </p>
        </motion.div>

        {/* Clean Timeline */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-craft p-6 sm:p-8 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A303F] pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">{exp.role}</h3>
                  <div className="text-xs font-semibold text-[#A7C97D] mt-0.5">
                    {exp.company} &bull; <span className="text-[#B8BDC8]">{exp.location}</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded bg-[#171A21] text-[#8FAE5D] border border-[#2A303F]">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-[#B8BDC8] leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 pt-1">
                <h4 className="text-[11px] font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                  Key Achievements
                </h4>
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#B8BDC8]">
                    <FaCheckCircle className="text-[#8FAE5D] mt-0.5 shrink-0 text-xs" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0F1115] text-[#B8BDC8] border border-[#2A303F]">
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
