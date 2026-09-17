import React from 'react';

export interface FluxusLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  useImageAvatar?: boolean;
}

export const FluxusLogo: React.FC<FluxusLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showSubtitle = true,
  className = '',
  useImageAvatar = false,
}) => {
  // Dimension configurations
  const dimensions = {
    sm: { icon: 32, svgSize: 32, title: 'text-sm', sub: 'text-[7.5px]', tracking: 'tracking-[0.22em]' },
    md: { icon: 44, svgSize: 44, title: 'text-lg sm:text-xl', sub: 'text-[8.5px] sm:text-[9.5px]', tracking: 'tracking-[0.25em]' },
    lg: { icon: 64, svgSize: 64, title: 'text-2xl sm:text-3xl', sub: 'text-[10px] sm:text-xs', tracking: 'tracking-[0.28em]' },
    xl: { icon: 96, svgSize: 96, title: 'text-4xl sm:text-5xl', sub: 'text-xs sm:text-sm', tracking: 'tracking-[0.32em]' },
  }[size];

  // The Emblem SVG representing the dynamic orbital crescent + forward arrow + central quantum sphere
  const emblemSvg = (
    <div
      className="relative flex-shrink-0 flex items-center justify-center group"
      style={{ width: dimensions.icon, height: dimensions.icon }}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0066FF]/40 via-[#00F0FF]/30 to-[#00FF88]/40 blur-md group-hover:blur-lg transition-all duration-300"></div>

      {useImageAvatar ? (
        <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan-400/50 shadow-glow-cyan p-0.5 bg-[#080C14]">
          <img
            src="/fluxus-quantum-logo.png"
            alt="Fluxus Quantum Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full filter drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Background Dark Radial */}
            <radialGradient id="fqDarkBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="80%" stopColor="#080C14" />
              <stop offset="100%" stopColor="#04060A" />
            </radialGradient>

            {/* Upper Azure-to-Cyan Arc */}
            <linearGradient id="fqTopArcGrad" x1="10%" y1="10%" x2="90%" y2="50%">
              <stop offset="0%" stopColor="#0055FF" />
              <stop offset="45%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Lower Emerald-to-Lime Arc */}
            <linearGradient id="fqBottomArcGrad" x1="10%" y1="90%" x2="90%" y2="30%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="35%" stopColor="#00FF88" />
              <stop offset="80%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Forward Arrow Gradient */}
            <linearGradient id="fqArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0FFFF" />
              <stop offset="40%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#00FF88" />
            </linearGradient>

            {/* Central Quantum Sphere Radial Gradient */}
            <radialGradient id="fqSphereGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#E6F9FF" />
              <stop offset="25%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="90%" stopColor="#033B6E" />
              <stop offset="100%" stopColor="#021B38" />
            </radialGradient>

            {/* Specular Highlight Filter */}
            <filter id="fqGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dark Circular Base */}
          <circle cx="50" cy="50" r="48" fill="url(#fqDarkBg)" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="1" />

          {/* Outer Ambient Orbital Ring Accent */}
          <circle cx="50" cy="50" r="44" stroke="rgba(0, 240, 255, 0.12)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Top Crescent Sweeping Swirl (Cobalt to Cyan) */}
          <path
            d="M 22 50 C 22 32 35 18 53 17 C 69 16 81 26 84 38 C 84 39 80 41 78 37 C 74 27 64 22 52 23 C 38 24 28 35 28 50 C 28 58 32 66 38 71 C 36 74 32 75 30 73 C 25 67 22 59 22 50 Z"
            fill="url(#fqTopArcGrad)"
          />

          {/* Bottom Dynamic Blade Crescent (Cyan to Emerald Neon) */}
          <path
            d="M 50 82 C 34 82 22 71 19 57 C 19 55 23 54 24 57 C 28 69 39 76 52 75 C 67 74 78 63 79 48 C 79 43 77 38 74 34 C 77 31 80 31 83 34 C 86 40 87 47 86 54 C 83 71 68 82 50 82 Z"
            fill="url(#fqBottomArcGrad)"
          />

          {/* Kinetic Forward / Upward Chevron Growth Arrow inside the vortex */}
          <path
            d="M 60 38 L 76 38 C 78 38 79 40 78 42 L 67 53 C 65 55 62 55 60 53 L 56 49 C 55 48 55 46 56 45 L 63 41 L 60 41 C 58 41 58 38 60 38 Z"
            fill="url(#fqArrowGrad)"
            filter="url(#fqGlow)"
          />

          {/* Quantum Sphere Halo Glow Ring */}
          <circle cx="49" cy="51" r="15" fill="none" stroke="#00F0FF" strokeWidth="1.2" opacity="0.6" />

          {/* Central 3D Quantum Sphere Orb */}
          <circle cx="49" cy="51" r="12.5" fill="url(#fqSphereGrad)" />

          {/* Glossy Specular Light Reflection on Sphere */}
          <ellipse cx="45.5" cy="46.5" rx="3.5" ry="2" fill="#FFFFFF" opacity="0.85" transform="rotate(-30 45.5 46.5)" />
          <circle cx="44" cy="45" r="1.2" fill="#FFFFFF" opacity="0.95" />

          {/* Inner Light Arc Refraction */}
          <path
            d="M 40 54 C 41 58 45 61 50 61 C 53 61 56 59 58 57"
            stroke="rgba(0, 255, 136, 0.4)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{emblemSvg}</div>;
  }

  // Wordmark element
  const wordmark = (
    <div className={`flex flex-col ${variant === 'stacked' ? 'items-center text-center mt-2.5' : 'justify-center'}`}>
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-['Syncopate'] font-bold ${dimensions.title} text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F7FA] to-[#B2EBF2] tracking-[0.14em] drop-shadow-[0_2px_10px_rgba(0,240,255,0.25)]`}
        >
          FLUXUS
        </span>
        <span
          className={`font-['Syncopate'] font-bold ${dimensions.title} text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#00FF88] tracking-[0.14em] text-glow-cyan`}
        >
          QUANTUM
        </span>
      </div>
      {showSubtitle && (
        <span
          className={`${dimensions.sub} uppercase ${dimensions.tracking} text-cyan-300/85 font-medium font-['Montserrat'] mt-1 sm:mt-1.5 flex items-center gap-1`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] inline-block"></span>
          Consultoría en Logística & Supply Chain
        </span>
      )}
    </div>
  );

  return (
    <div
      className={`inline-flex ${
        variant === 'stacked' ? 'flex-col items-center' : 'items-center gap-3.5'
      } ${className}`}
    >
      {emblemSvg}
      {wordmark}
    </div>
  );
};
