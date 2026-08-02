import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const highlights = [
  "Competitive Programming",
  "Full Stack Development",
  "AI Projects",
  "IoT Projects",
  "Problem Solving",
  "Education"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#171A21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Architecting Code & <span className="text-olive-gradient">Solving Complex Problems</span>
          </h2>
          <p className="text-sm sm:text-base text-[#B8BDC8] max-w-2xl mx-auto">
            A background summary of my academic achievements, engineering focus, and software development journey.
          </p>
        </motion.div>

        {/* Highlight Badges Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-medium text-[#F5F5F5]"
            >
              <FaCheckCircle className="text-[#8FAE5D] text-xs" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="card-craft p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 border-b border-[#2A303F] pb-4">
                <div className="p-2.5 rounded-[10px] bg-[#8FAE5D]/15 text-[#8FAE5D]">
                  <FaLaptopCode size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">Professional Background</h3>
                  <p className="text-xs text-[#B8BDC8]">Computer Science & Full Stack Software Engineer</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#B8BDC8] leading-relaxed">
                {personalDetails.about.intro}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#8FAE5D] uppercase tracking-wider font-mono">My Journey</h4>
                <p className="text-xs sm:text-sm text-[#B8BDC8] leading-relaxed">
                  {personalDetails.about.journey}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#8FAE5D] uppercase tracking-wider font-mono">Interests & Focus</h4>
                <p className="text-xs sm:text-sm text-[#B8BDC8] leading-relaxed">
                  {personalDetails.about.interests}
                </p>
              </div>

              <div className="p-4 rounded-[12px] bg-[#0F1115] border border-[#2A303F] space-y-1.5">
                <h4 className="text-xs font-bold text-[#A7C97D] uppercase tracking-wider font-mono">Career Objective</h4>
                <p className="text-xs text-[#B8BDC8] leading-relaxed">
                  {personalDetails.about.objective}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="card-craft p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2A303F] pb-4">
                <div className="p-2.5 rounded-[10px] bg-[#A7C97D]/15 text-[#A7C97D]">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">Education</h3>
                  <p className="text-xs text-[#B8BDC8]">Academic foundation & coursework</p>
                </div>
              </div>

              {/* Education List */}
              <div className="space-y-5">
                {personalDetails.education.map((edu) => (
                  <div key={edu.institution} className="space-y-2 bg-[#0F1115] p-4.5 rounded-[12px] border border-[#2A303F]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[#F5F5F5]">{edu.institution}</h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1D212B] text-[#A7C97D] border border-[#2A303F]">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#8FAE5D]">
                      {edu.degree} &bull; <span className="text-[#F5F5F5] font-mono">{edu.cgpa}</span>
                    </div>

                    <p className="text-xs text-[#B8BDC8] leading-relaxed">
                      {edu.details}
                    </p>

                    {edu.coursework && (
                      <div className="pt-1.5 flex flex-wrap gap-1.5">
                        {edu.coursework.map(course => (
                          <span 
                            key={course} 
                            className="text-[10px] px-2 py-0.5 rounded bg-[#1D212B] text-[#B8BDC8] border border-[#2A303F]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
