import React from 'react';

const PixoraLogo = ({ className = "", showTagline = true, size = "default" }) => {
  const sizeClasses = {
    small: "w-32 h-16",
    default: "w-48 h-24", 
    large: "w-64 h-32"
  };

  const textSizes = {
    small: { main: "text-lg", tagline: "text-xs" },
    default: { main: "text-2xl", tagline: "text-sm" },
    large: { main: "text-4xl", tagline: "text-lg" }
  };

  return (
    <div className={`flex flex-col items-center ${sizeClasses[size]} ${className}`}>
      {/* Logo Symbol */}
      <div className="mb-2">
        <svg 
          width="60" 
          height="60" 
          viewBox="0 0 60 60" 
          className="text-silver-400"
          fill="none"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="50%" stopColor="#E5E5E5" />
              <stop offset="100%" stopColor="#A8A8A8" />
            </linearGradient>
          </defs>
          
          {/* Main geometric shape - stylized P */}
          <path 
            d="M10 10 L10 50 L25 50 L35 40 L35 30 L25 30 L25 20 L35 20 L35 10 Z" 
            fill="url(#logoGradient)"
            stroke="#B0B0B0"
            strokeWidth="1"
          />
          
          {/* Arrow element */}
          <path 
            d="M40 15 L50 15 L50 25 L45 25 L45 35 L40 35 Z" 
            fill="url(#logoGradient)"
            stroke="#B0B0B0"
            strokeWidth="1"
          />
          
          {/* Additional geometric accent */}
          <circle 
            cx="45" 
            cy="45" 
            r="8" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* PIXORA Text */}
      <div className={`font-bold tracking-widest uppercase ${textSizes[size].main} bg-gradient-to-r from-silver-300 to-silver-100 bg-clip-text text-transparent`}>
        PIXORA
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <div className={`font-light tracking-wide uppercase ${textSizes[size].tagline} text-gray-400 mt-1`}>
          DIGITAL BRANDING & WEB DEVELOPMENT
        </div>
      )}
    </div>
  );
};

export default PixoraLogo;
