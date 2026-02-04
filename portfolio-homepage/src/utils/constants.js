// Configuration constants for the portfolio homepage

export const USER_CONFIG = {
  personal: {
    name: "Kalkidan Mengistu",
    roles: ["Software Engineer", "Full-Stack Developer", "Problem Solver"],
    tagline: "I design and build modern, scalable web experiences with clean code and real impact.",
    email: "kalkidan@example.com"
  },
  social: {
    github: "kalkidan-mengistu", // Replace with actual GitHub username
    linkedin: "https://linkedin.com/in/kalkidan-mengistu", // Replace with actual LinkedIn
  },
  preferences: {
    backgroundStyle: "mesh", // 'mesh' | 'particles' | 'glassmorphism' | 'code'
    enableSounds: true,
    animationSpeed: "normal" // 'slow' | 'normal' | 'fast'
  }
};

export const ANIMATION_CONFIG = {
  typing: {
    speed: 100, // milliseconds per character
    pauseDuration: 2000, // pause between role changes
    cursorBlink: true
  },
  hover: {
    magneticStrength: 0.3, // 0-1 scale for magnetic effect
    glowIntensity: 0.5 // 0-1 scale for glow effect
  },
  entrance: {
    staggerDelay: 0.1, // delay between element animations
    duration: 0.8 // animation duration in seconds
  }
};

export const BACKGROUND_STYLES = {
  MESH: 'mesh',
  PARTICLES: 'particles', 
  GLASSMORPHISM: 'glassmorphism',
  CODE: 'code'
};

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary', 
  TERTIARY: 'tertiary'
};

export const SOCIAL_PLATFORMS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  EMAIL: 'email'
};

// Animation variants for Framer Motion
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// GitHub API endpoints
export const GITHUB_API = {
  BASE_URL: 'https://api.github.com',
  USER_ENDPOINT: (username) => `https://api.github.com/users/${username}`,
  REPOS_ENDPOINT: (username) => `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
};

// Technical terms for highlighting in tagline
export const TECHNICAL_TERMS = [
  'modern', 'scalable', 'web experiences', 'clean code', 'real impact'
];

// Default particle system configuration
export const PARTICLE_CONFIG = {
  count: 50,
  speed: 1,
  size: 2,
  connectionDistance: 150,
  mouseRadius: 200
};

// Code snippets for background animation
export const CODE_SNIPPETS = [
  `const portfolio = {
  name: "Kalkidan Mengistu",
  skills: ["React", "JavaScript", "Node.js"],
  passion: "Building amazing experiences"
};`,
  `function createMagic() {
  return innovation + creativity + code;
}`,
  `// Clean, modern, scalable
const future = await buildSomethingAmazing();`,
  `export default function Developer() {
  return <ProblemSolver />;
}`
];