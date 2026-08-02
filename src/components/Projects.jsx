import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaWaveSquare, FaChartPie } from 'react-icons/fa';
import { featuredProjects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#171A21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs sm:text-sm font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F5]">
            Featured <span className="text-olive-gradient">Engineering Work</span>
          </h2>
          <p className="text-base sm:text-lg text-[#B8BDC8] max-w-2xl mx-auto">
            Clean, functional web applications and algorithmic systems built with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-craft flex flex-col justify-between p-7 h-full"
            >
              <div className="space-y-4">
                {/* Visual Header / Graphic Preview */}
                <div className="h-44 rounded-[12px] bg-[#0F1115] border border-[#2A303F] p-4 flex flex-col justify-between overflow-hidden relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#171A21] text-[#8FAE5D] border border-[#2A303F]">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">0{idx + 1}</span>
                  </div>

                  {/* Clean Visual Graphic */}
                  <div className="flex items-center justify-center text-[#8FAE5D] my-auto">
                    {idx === 0 && <FaCalendarAlt size={42} />}
                    {idx === 1 && <FaWaveSquare size={42} />}
                    {idx === 2 && <FaChartPie size={42} />}
                  </div>

                  <div className="text-xs font-mono text-center text-[#B8BDC8]">
                    {project.subtitle}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-bold text-[#F5F5F5]">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#B8BDC8] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-[6px] bg-[#0F1115] text-[#B8BDC8] text-xs font-mono border border-[#2A303F]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-[#2A303F]/60">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-[#0F1115] text-[#F5F5F5] text-xs sm:text-sm font-semibold border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-[#8FAE5D] text-[#0F1115] text-xs sm:text-sm font-semibold hover:bg-[#A7C97D] transition-colors"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Live Demo</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View More Projects on GitHub Button */}
        <div className="pt-6 flex justify-center">
          <a
            href="https://github.com/kalolaTej"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-[#1D212B] text-[#F5F5F5] text-sm font-semibold border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors"
          >
            <FaGithub size={18} />
            <span>View More Projects on GitHub</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
