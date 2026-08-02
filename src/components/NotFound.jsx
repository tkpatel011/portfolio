import React from 'react';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] bg-grid-pattern flex items-center justify-center p-4">
      <div className="card-craft p-10 max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#8FAE5D]/15 text-[#8FAE5D] border border-[#8FAE5D]/30 flex items-center justify-center mx-auto text-2xl">
          <FaExclamationTriangle />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold font-mono text-[#8FAE5D]">404</h1>
          <h2 className="text-xl font-bold text-[#F5F5F5]">Page Not Found</h2>
          <p className="text-xs text-[#B8BDC8] leading-relaxed">
            The page or algorithmic route you are looking for does not exist or has been moved.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-[#8FAE5D] text-[#0F1115] font-semibold text-xs hover:bg-[#A7C97D] transition-colors"
        >
          <FaHome size={14} />
          <span>Return to Portfolio</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
