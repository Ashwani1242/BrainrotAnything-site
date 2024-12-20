import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#33a1fd] via-[#3ea6ff] to-[#00d4ff] text-white p-4 font-['Istok_Web']">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found</p>
      <p className="text-xl mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="bg-white text-black hover:bg-[#f0f0f0] transition-colors duration-300 py-2 px-4 rounded" >
        Go Back To Brainrot!
      </Link>
    </div>
  );
};

export default NotFound;

