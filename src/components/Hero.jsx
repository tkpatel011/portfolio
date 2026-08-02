import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center bg-[#0F1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copy Column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
                Hi, I'm <span className="text-olive-gradient">Tej Kalola</span>
              </h1>
              
              {/* Static Subtitle */}
              <p className="text-sm sm:text-lg font-semibold text-[#A7C97D] font-mono leading-relaxed">
                Computer Science Student | Competitive Programmer | Full Stack Developer
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base text-[#B8BDC8] leading-relaxed max-w-2xl">
              I enjoy solving challenging algorithmic problems and building scalable web applications with modern technologies. My focus is on creating clean, efficient, and impactful software.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-[12px] bg-[#8FAE5D] text-[#0F1115] font-semibold text-sm hover:bg-[#A7C97D] transition-colors cursor-pointer"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-[12px] bg-[#1D212B] text-[#F5F5F5] font-semibold text-sm border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors"
              >
                <FaEnvelope className="text-xs text-[#8FAE5D]" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Code Preview Column - Focused Purely on Competitive Programming */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="card-craft overflow-hidden shadow-xl">
              {/* Window Header */}
              <div className="bg-[#171A21] px-4 py-3 border-b border-[#2A303F] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B8BDC8]">
                  <FaCode className="text-[#8FAE5D]" />
                  <span>TejKalola.cpp</span>
                </div>
                <div className="text-[10px] text-[#8FAE5D] font-mono bg-[#8FAE5D]/10 px-2 py-0.5 rounded">
                  C++20
                </div>
              </div>

              {/* Code Snippet - Purely CP & DSA */}
              <div className="p-5 font-mono text-xs sm:text-sm text-[#F5F5F5] space-y-2 bg-[#0F1115] overflow-x-auto leading-relaxed">
                <div><span className="text-[#8FAE5D]">#include</span> <span className="text-amber-300">&lt;bits/stdc++.h&gt;</span></div>
                <div><span className="text-[#8FAE5D]">using namespace</span> std;</div>
                <div className="text-gray-500 pt-1">// Competitive Programming & Algorithmic Solver</div>
                <div><span className="text-[#A7C97D]">void</span> <span className="text-blue-400">solveAlgorithmicProblem</span>() &#123;</div>
                <div className="pl-4 text-gray-300">string rank = <span className="text-amber-300">"Pupil (Max 1396)"</span>;</div>
                <div className="pl-4 text-gray-300">vector&lt;string&gt; cpSkills = &#123;<span className="text-amber-300">"C++20"</span>, <span className="text-amber-300">"STL"</span>, <span className="text-amber-300">"Graphs"</span>, <span className="text-amber-300">"DP"</span>&#125;;</div>
                <div className="pl-4 text-gray-300">int totalSolved = <span className="text-[#A7C97D]">1300</span>; <span className="text-gray-500">// CF + LC</span></div>
                <div className="pl-4 text-[#8FAE5D]">cout &lt;&lt; <span className="text-amber-300">"Time Complexity: O(N log N)"</span>;</div>
                <div>&#125;</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
