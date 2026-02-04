import { useState, useEffect } from 'react';

export const usePersonalization = () => {
  const [context, setContext] = useState({
    device: 'desktop',
    location: null,
    interest: null,
    personalizationEnabled: true
  });

  // Device detection
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    const handleResize = () => {
      setContext(prev => ({ ...prev, device: detectDevice() }));
    };

    setContext(prev => ({ ...prev, device: detectDevice() }));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Privacy-respecting geolocation
  useEffect(() => {
    const getLocation = async () => {
      try {
        // Only request if user hasn't declined before
        const declined = localStorage.getItem('location-declined');
        if (declined) return;

        // Use IP-based location (privacy-friendly)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.city && data.country_name) {
          setContext(prev => ({ 
            ...prev, 
            location: { city: data.city, country: data.country_name }
          }));
        }
      } catch (error) {
        // Fail silently - no location data
        console.log('Location detection unavailable');
      }
    };

    getLocation();
  }, []);

  // Interest prediction based on hover behavior
  const trackInterest = (interest) => {
    setContext(prev => ({ ...prev, interest }));
  };

  // Toggle personalization
  const togglePersonalization = () => {
    setContext(prev => ({ 
      ...prev, 
      personalizationEnabled: !prev.personalizationEnabled 
    }));
    localStorage.setItem('personalization-enabled', 
      JSON.stringify(!context.personalizationEnabled));
  };

  // Load personalization preference
  useEffect(() => {
    const saved = localStorage.getItem('personalization-enabled');
    if (saved !== null) {
      setContext(prev => ({ 
        ...prev, 
        personalizationEnabled: JSON.parse(saved) 
      }));
    }
  }, []);

  return {
    context,
    trackInterest,
    togglePersonalization
  };
};

// Content adaptation based on context
export const getAdaptedContent = (context) => {
  if (!context.personalizationEnabled) {
    return {
      greeting: null,
      microIntro: "I care about clarity, maintainability, and building things that last beyond demos.",
      ctaText: {
        work: "View Work",
        cv: "Download CV", 
        contact: "Contact"
      }
    };
  }

  // Device-based adaptations
  const deviceAdaptations = {
    mobile: {
      ctaText: {
        work: "Quick View",
        cv: "Get CV",
        contact: "Contact"
      }
    },
    tablet: {
      ctaText: {
        work: "Browse Work",
        cv: "Download CV",
        contact: "Get in Touch"
      }
    },
    desktop: {
      ctaText: {
        work: "Explore Projects",
        cv: "Download CV",
        contact: "Contact"
      }
    }
  };

  // Interest-based micro-intro adaptations
  const interestAdaptations = {
    work: "Passionate about building scalable applications that solve real problems.",
    contact: "Always open to new connections and interesting conversations.",
    about: "Focused on writing clean, maintainable code that stands the test of time.",
    default: "I care about clarity, maintainability, and building things that last beyond demos."
  };

  // Location-based greeting
  const greeting = context.location 
    ? `Hello from ${context.location.city}!`
    : null;

  // Get device-specific content
  const deviceContent = deviceAdaptations[context.device] || deviceAdaptations.desktop;
  
  // Get interest-specific micro-intro
  const microIntro = interestAdaptations[context.interest] || interestAdaptations.default;

  // Dynamic CTA prioritization based on interest
  let ctaText = { ...deviceContent.ctaText };
  if (context.interest === 'work') {
    ctaText.work = "See My Projects"; // More prominent
  } else if (context.interest === 'contact') {
    ctaText.contact = "Let's Connect"; // More prominent
  }

  return {
    greeting,
    microIntro,
    ctaText
  };
};