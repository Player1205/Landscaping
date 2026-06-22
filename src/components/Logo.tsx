import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="text-[#D4AF37] flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          {/* Outer circle starting from leaf base */}
          <path d="M 6.8 18.5 A 10 10 0 0 0 12 22 A 10 10 0 0 0 12 2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          {/* Leaf inner edge */}
          <path d="M 6.8 18.5 C 11 15 11 8 12 2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          {/* Leaf outer edge */}
          <path d="M 6.8 18.5 A 10 10 0 0 1 12 2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          {/* Drop */}
          <path d="M 13 10 C 13 10 10 14 10 16.5 A 3 3 0 0 0 16 16.5 C 16 14 13 10 13 10 Z" fill="currentColor" />
          {/* Sparkle */}
          <path d="M 16.5 6.5 L 16.8 8.2 L 18.5 8.5 L 16.8 8.8 L 16.5 10.5 L 16.2 8.8 L 14.5 8.5 L 16.2 8.2 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-serif font-extrabold tracking-[0.1em] text-primary uppercase leading-none">
          Econest
        </span>
        <span className="text-[0.55rem] font-sans tracking-[0.2em] text-primary/80 uppercase mt-1 leading-none">
          Cleaning & Lawn Craft
        </span>
      </div>
    </div>
  );
};

export default Logo;
