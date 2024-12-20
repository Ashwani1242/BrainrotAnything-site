import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center text-left max-w-[900px]">
      <h1 className="text-3xl md:text-5xl m-0 text-white font-bold">Turn Anything To Brainrot! 🚀🧠</h1>
      <h2 className="text-xl md:text-2xl m-0 text-[#e8e8e8] font-bold">
        Transform your PDF, documents and image files into engaging, easy-to-digest short-form videos using AI
      </h2>
    </div>
  );
};

export default Header;

