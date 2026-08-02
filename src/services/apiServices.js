import axios from 'axios';
import { 
  fallbackCodeforcesStats, 
  fallbackLeetcodeStats, 
  fallbackGithubRepos 
} from '../data/portfolioData';

// GitHub API Services
export const fetchGithubRepos = async (username = 'kalolaTej') => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, {
      timeout: 5000
    });
    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      return response.data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description provided.',
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        language: repo.language || 'Code',
        category: repo.language === 'C++' || repo.language === 'Java' ? 'Algorithms' : 'Full Stack',
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        homepage: repo.homepage
      }));
    }
    return fallbackGithubRepos;
  } catch (error) {
    console.warn('Using fallback GitHub repos:', error.message);
    return fallbackGithubRepos;
  }
};

export const fetchGithubUserStats = async (username = 'kalolaTej') => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, { timeout: 5000 });
    return {
      public_repos: response.data.public_repos || 7,
      followers: response.data.followers || 0,
      following: response.data.following || 0,
      created_at: response.data.created_at
    };
  } catch (error) {
    return { public_repos: 7, followers: 0, following: 0 };
  }
};

// Codeforces API Services (Live Exact Fetch)
export const fetchCodeforcesStats = async (handle = 'Tej_Kalola_') => {
  try {
    const userInfoRes = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`, { timeout: 6000 });
    const userRatingRes = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`, { timeout: 6000 });
    const userStatusRes = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`, { timeout: 8000 });

    if (userInfoRes.data.status === 'OK' && userInfoRes.data.result.length > 0) {
      const user = userInfoRes.data.result[0];
      const contests = userRatingRes.data.status === 'OK' ? userRatingRes.data.result : [];
      const submissions = userStatusRes.data.status === 'OK' ? userStatusRes.data.result : [];

      // Calculate exact unique solved problems on Codeforces
      const solvedProblems = new Set(
        submissions
          .filter(s => s.verdict === 'OK')
          .map(s => `${s.problem.contestId}_${s.problem.index}`)
      );

      const formattedContests = contests.slice(-5).reverse().map(c => ({
        name: c.contestName,
        rank: c.rank,
        ratingChange: (c.newRating - c.oldRating) >= 0 ? `+${c.newRating - c.oldRating}` : `${c.newRating - c.oldRating}`,
        newRating: c.newRating,
        date: new Date(c.ratingUpdateTimeSeconds * 1000).toLocaleDateString()
      }));

      return {
        rating: user.rating || 1366,
        maxRating: user.maxRating || 1396,
        rank: user.rank || 'pupil',
        maxRank: user.maxRank || 'pupil',
        handle: user.handle,
        contestsCount: contests.length || 36,
        problemsSolved: solvedProblems.size > 0 ? solvedProblems.size : 775,
        recentContests: formattedContests.length > 0 ? formattedContests : fallbackCodeforcesStats.recentContests
      };
    }
    return fallbackCodeforcesStats;
  } catch (error) {
    console.warn('Using fallback Codeforces stats:', error.message);
    return fallbackCodeforcesStats;
  }
};

// LeetCode API Services
export const fetchLeetcodeStats = async (username = 'Tej_Kalola') => {
  try {
    const alfaRes = await axios.get(`https://alfa-leetcode-api.onrender.com/${username}/solved`, { timeout: 5000 });
    if (alfaRes.data && alfaRes.data.solvedProblem !== undefined) {
      return {
        totalSolved: alfaRes.data.solvedProblem || 533,
        easySolved: alfaRes.data.easySolved || 181,
        mediumSolved: alfaRes.data.mediumSolved || 320,
        hardSolved: alfaRes.data.hardSolved || 32,
        acceptanceRate: 64.5,
        ranking: 38400,
        handle: username
      };
    }
  } catch (error) {
    console.warn('Primary LeetCode API error, trying backup API:', error.message);
  }

  try {
    const backupRes = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`, { timeout: 5000 });
    if (backupRes.data && backupRes.data.status === 'success') {
      return {
        totalSolved: backupRes.data.totalSolved || 550,
        easySolved: backupRes.data.easySolved || 200,
        mediumSolved: backupRes.data.mediumSolved || 280,
        hardSolved: backupRes.data.hardSolved || 70,
        acceptanceRate: backupRes.data.acceptanceRate || 64.5,
        ranking: backupRes.data.ranking || 38400,
        handle: username
      };
    }
  } catch (err) {
    console.warn('Using fallback LeetCode stats:', err.message);
  }

  return fallbackLeetcodeStats;
};
