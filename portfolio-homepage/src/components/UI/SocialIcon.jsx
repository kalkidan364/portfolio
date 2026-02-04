import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import { SOCIAL_PLATFORMS, GITHUB_API } from '../../utils/constants';

const SocialIcon = ({ 
  platform, 
  url, 
  username, 
  showStats = false 
}) => {
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch GitHub stats if needed
  useEffect(() => {
    if (platform === SOCIAL_PLATFORMS.GITHUB && showStats && username) {
      fetchGitHubStats();
    }
  }, [platform, showStats, username]);

  const fetchGitHubStats = async () => {
    setLoading(true);
    try {
      // Fetch user data
      const userResponse = await fetch(GITHUB_API.USER_ENDPOINT(username));
      const userData = await userResponse.json();
      
      // Fetch repositories
      const reposResponse = await fetch(GITHUB_API.REPOS_ENDPOINT(username));
      const reposData = await reposResponse.json();
      
      // Calculate total stars
      const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      
      setGithubStats({
        totalStars,
        totalRepos: userData.public_repos,
        lastUpdated: new Date()
      });
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = () => {
    switch (platform) {
      case SOCIAL_PLATFORMS.GITHUB:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      
      case SOCIAL_PLATFORMS.LINKEDIN:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      
      case SOCIAL_PLATFORMS.EMAIL:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      
      default:
        return null;
    }
  };

  const getTooltipContent = () => {
    switch (platform) {
      case SOCIAL_PLATFORMS.GITHUB:
        if (showStats && githubStats) {
          return `View my GitHub • ⭐ ${githubStats.totalStars} stars • 📦 ${githubStats.totalRepos} repos`;
        }
        return 'View my GitHub';
      
      case SOCIAL_PLATFORMS.LINKEDIN:
        return 'Connect on LinkedIn';
      
      case SOCIAL_PLATFORMS.EMAIL:
        return 'Send me an email';
      
      default:
        return '';
    }
  };

  const handleClick = () => {
    if (platform === SOCIAL_PLATFORMS.EMAIL) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Tooltip content={getTooltipContent()}>
      <motion.button
        onClick={handleClick}
        className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white transition-all duration-300 group"
        whileHover={{
          scale: 1.1,
          y: -5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: platform === SOCIAL_PLATFORMS.GITHUB 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
              : platform === SOCIAL_PLATFORMS.LINKEDIN
              ? 'radial-gradient(circle, rgba(0, 119, 181, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
          whileHover={{
            scale: 1.5,
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10">
          {loading && platform === SOCIAL_PLATFORMS.GITHUB ? (
            <motion.div
              className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            getIcon()
          )}
        </div>

        {/* Stats badge for GitHub */}
        {platform === SOCIAL_PLATFORMS.GITHUB && showStats && githubStats && (
          <motion.div
            className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          >
            ⭐ {githubStats.totalStars}
          </motion.div>
        )}
      </motion.button>
    </Tooltip>
  );
};

export default SocialIcon;