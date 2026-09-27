import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import { fetchGithubRepos, fetchGithubUserStats } from '../services/apiServices';
import { personalDetails } from '../data/portfolioData';

const GitHubDashboard = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState({ public_repos: 7, followers: 0, following: 0 });

  useEffect(() => {
    const loadGithubData = async () => {
      setLoading(true);
      const repoData = await fetchGithubRepos(personalDetails.handles.github);
      const statsData = await fetchGithubUserStats(personalDetails.handles.github);
      setRepos(repoData);
      setUserStats(statsData);
      setLoading(false);
    };

    loadGithubData();
  }, []);

  return (
    <section id="github" className="py-24 bg-[#0F1115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs sm:text-sm font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Open Source
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F5]">
            GitHub <span className="text-olive-gradient">Repositories</span>
          </h2>
          <p className="text-base sm:text-lg text-[#B8BDC8] max-w-2xl mx-auto">
            Original & live repositories fetched directly from @kalolaTej GitHub profile.
          </p>
        </motion.div>

        {/* Clean Live Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <div
              key={repo.id || repo.name}
              className="card-craft p-6 flex flex-col justify-between hover:border-[#8FAE5D]/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] truncate max-w-[200px]">
                    {repo.name}
                  </h4>
                  <span className="text-xs font-mono text-[#8FAE5D] px-2.5 py-1 rounded bg-[#171A21]">
                    {repo.language || 'Code'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#B8BDC8] line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2A303F]/50 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-[#B8BDC8]">
                  <span className="flex items-center gap-1 text-amber-400">
                    <FaStar size={13} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-blue-400">
                    <FaCodeBranch size={13} /> {repo.forks_count}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-[8px] bg-[#171A21] border border-[#2A303F] text-[#F5F5F5] hover:text-[#8FAE5D] transition-colors text-sm"
                    title="View Repository"
                  >
                    <FaGithub />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-[8px] bg-[#8FAE5D] text-[#0F1115] text-sm hover:bg-[#A7C97D] transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View GitHub Profile Button */}
        <div className="pt-4 flex justify-center">
          <a
            href="https://github.com/kalolaTej"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-[#1D212B] text-[#F5F5F5] text-sm font-semibold border border-[#2A303F] hover:border-[#8FAE5D] hover:text-[#8FAE5D] transition-colors"
          >
            <FaGithub size={18} />
            <span>Visit @kalolaTej on GitHub</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default GitHubDashboard;
