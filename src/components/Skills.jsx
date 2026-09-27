import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaPython, 
  FaJava, 
  FaLayerGroup, 
  FaDatabase,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiTailwindcss, 
  SiVite, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiSupabase, 
  SiPostman, 
  SiVercel, 
  SiRender 
} from 'react-icons/si';
import { 
  TbBinaryTree, 
  TbDatabase, 
  TbCpu, 
  TbCode, 
  TbBrain, 
  TbBrandVscode 
} from 'react-icons/tb';
import { personalDetails } from '../data/portfolioData';

const iconMap = {
  SiCplusplus: <SiCplusplus className="text-blue-400" size={22} />,
  FaJava: <FaJava className="text-amber-500" size={22} />,
  FaPython: <FaPython className="text-yellow-400" size={22} />,
  SiJavascript: <SiJavascript className="text-yellow-300" size={22} />,
  TbDatabase: <TbDatabase className="text-[#8FAE5D]" size={22} />,
  FaReact: <FaReact className="text-cyan-400" size={22} />,
  FaHtml5: <FaHtml5 className="text-orange-500" size={22} />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500" size={22} />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-300" size={22} />,
  SiVite: <SiVite className="text-purple-400" size={22} />,
  FaNodeJs: <FaNodeJs className="text-green-500" size={22} />,
  SiExpress: <SiExpress className="text-[#F5F5F5]" size={22} />,
  SiMongodb: <SiMongodb className="text-green-400" size={22} />,
  SiMysql: <SiMysql className="text-blue-400" size={22} />,
  SiOracle: <FaDatabase className="text-red-500" size={22} />,
  SiSupabase: <SiSupabase className="text-emerald-400" size={22} />,
  FaGitAlt: <FaGitAlt className="text-orange-600" size={22} />,
  FaGithub: <FaGithub className="text-[#F5F5F5]" size={22} />,
  TbBrandVscode: <TbBrandVscode className="text-blue-400" size={22} />,
  SiPostman: <SiPostman className="text-orange-400" size={22} />,
  SiVercel: <SiVercel className="text-[#F5F5F5]" size={22} />,
  SiRender: <SiRender className="text-emerald-400" size={22} />,
  TbBinaryTree: <TbBinaryTree className="text-[#A7C97D]" size={22} />,
  TbCpu: <TbCpu className="text-indigo-400" size={22} />,
  TbCode: <TbCode className="text-[#8FAE5D]" size={22} />,
  TbBrain: <TbBrain className="text-pink-400" size={22} />
};

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const allSkillsList = personalDetails.skills.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const displayedSkills = showAll ? allSkillsList : allSkillsList.slice(0, 6);

  return (
    <section id="skills" className="py-12 sm:py-16 bg-[#0F1115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Skills & <span className="text-olive-gradient">Core Technologies</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Clean overview of programming languages, developer tools, and core computer science domains.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="card-craft p-5 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-[8px] bg-[#171A21] border border-[#2A303F]">
                      {iconMap[skill.icon] || <FaLayerGroup className="text-[#8FAE5D]" size={20} />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F5F5F5]">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#8FAE5D] block uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171A21] text-[#A7C97D] border border-[#2A303F]">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-[#B8BDC8] leading-relaxed pt-0.5">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less Toggle Button */}
        {allSkillsList.length > 6 && (
          <div className="pt-1 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[12px] bg-[#1D212B] text-[#F5F5F5] text-xs font-semibold border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Show Less Skills' : 'View More Skills'}</span>
              {showAll ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
