import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { fetchCodeforcesStats, fetchLeetcodeStats } from '../services/apiServices';
import { personalDetails } from '../data/portfolioData';

const CompetitiveProgramming = () => {
  const [codeforces, setCodeforces] = useState(null);
  const [leetcode, setLeetcode] = useState(null);

  useEffect(() => {
    const loadCPData = async () => {
      const cfData = await fetchCodeforcesStats(personalDetails.handles.codeforces);
      const lcData = await fetchLeetcodeStats(personalDetails.handles.leetcode);
      setCodeforces(cfData);
      setLeetcode(lcData);
    };

    loadCPData();
  }, []);

  return (
    <section id="competitive-programming" className="py-20 bg-[#171A21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Competitive Programming
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Coding Profile <span className="text-olive-gradient">Statistics</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            1300+ DSA & Competitive Programming problems solved across Codeforces, LeetCode, and other platforms.
          </p>
        </motion.div>

        {/* Dual Cards: Codeforces vs LeetCode */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CODEFORCES */}
          <div className="card-craft p-6 space-y-5 border-t-2 border-t-[#8FAE5D]">
            <div className="flex items-center justify-between border-b border-[#2A303F] pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-[10px] bg-[#8FAE5D]/15 text-[#8FAE5D] text-xl">
                  <SiCodeforces />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">Codeforces</h3>
                  <div className="text-xs text-[#8FAE5D] font-mono">@{codeforces?.handle || 'Tej_Kalola_'}</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#8FAE5D]/20 text-[#A7C97D] text-xs font-mono font-semibold capitalize border border-[#8FAE5D]/30">
                Pupil Badge
              </span>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-[10px] bg-[#0F1115] border border-[#2A303F]">
                <div className="text-[10px] text-[#B8BDC8] font-mono">Current Rating</div>
                <div className="text-lg font-bold font-mono text-[#A7C97D]">{codeforces?.rating || 1366}</div>
              </div>
              <div className="p-3 rounded-[10px] bg-[#0F1115] border border-[#2A303F]">
                <div className="text-[10px] text-[#B8BDC8] font-mono">Max Rating</div>
                <div className="text-lg font-bold font-mono text-[#F5F5F5]">{codeforces?.maxRating || 1396}</div>
              </div>
              <div className="p-3 rounded-[10px] bg-[#0F1115] border border-[#2A303F]">
                <div className="text-[10px] text-[#B8BDC8] font-mono">Problems Solved</div>
                <div className="text-lg font-bold font-mono text-emerald-400">{codeforces?.problemsSolved || 775}</div>
              </div>
              <div className="p-3 rounded-[10px] bg-[#0F1115] border border-[#2A303F]">
                <div className="text-[10px] text-[#B8BDC8] font-mono">Contests</div>
                <div className="text-lg font-bold font-mono text-blue-400">{codeforces?.contestsCount || 36}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={personalDetails.socials.codeforces}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-[10px] bg-[#8FAE5D] text-[#0F1115] font-semibold text-xs hover:bg-[#A7C97D] transition-colors"
              >
                <span>View Codeforces Profile</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>

          {/* LEETCODE */}
          <div className="card-craft p-6 space-y-5 border-t-2 border-t-amber-500">
            <div className="flex items-center justify-between border-b border-[#2A303F] pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-[10px] bg-amber-500/15 text-amber-400 text-xl">
                  <SiLeetcode />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">LeetCode</h3>
                  <div className="text-xs text-amber-400 font-mono">@{leetcode?.handle || 'Tej_Kalola'}</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold border border-amber-500/30">
                Knight Badge
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#0F1115] border border-[#2A303F]">
              <div>
                <div className="text-[10px] text-[#B8BDC8] font-mono">Total Solved</div>
                <div className="text-2xl font-bold font-mono text-[#F5F5F5]">{leetcode?.totalSolved || 533}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-amber-400 font-mono">Global Percentile: Top 5.96%</div>
                <div className="text-xs text-[#B8BDC8] font-mono">Knight Rank</div>
              </div>
            </div>

            {/* Easy / Medium / Hard */}
            <div className="space-y-2 bg-[#0F1115] p-3 rounded-[10px] border border-[#2A303F]">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-emerald-400">Easy</span>
                  <span className="text-[#F5F5F5]">{leetcode?.easySolved || 181} Solved</span>
                </div>
                <div className="w-full h-1.5 bg-[#171A21] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[75%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-amber-400">Medium</span>
                  <span className="text-[#F5F5F5]">{leetcode?.mediumSolved || 320} Solved</span>
                </div>
                <div className="w-full h-1.5 bg-[#171A21] rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-[60%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-rose-400">Hard</span>
                  <span className="text-[#F5F5F5]">{leetcode?.hardSolved || 32} Solved</span>
                </div>
                <div className="w-full h-1.5 bg-[#171A21] rounded-full overflow-hidden">
                  <div className="h-full bg-rose-400 w-[35%]" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={personalDetails.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-[10px] bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors"
              >
                <span>View LeetCode Profile</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>

        </div>

        {/* Codolio Unified Profile Banner Button */}
        <div className="pt-2 flex justify-center">
          <a
            href={personalDetails.socials.codolio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[12px] bg-[#1D212B] text-[#F5F5F5] text-xs font-semibold border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors"
          >
            <FaCode className="text-[#8FAE5D]" size={16} />
            <span>View Unified CP Profile on Codolio (@Tej_Kalola)</span>
            <FaExternalLinkAlt size={11} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CompetitiveProgramming;
