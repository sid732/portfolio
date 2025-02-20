import React, { useState, useEffect } from 'react';
import { Home, Clock, Folder, Star, Mail } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1625] text-white flex flex-col relative overflow-hidden">
      {/* Greeting Text */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-gray-400">
        Hi There, I'm
      </div>

      {/* Main Name */}
      <div className={`text-center mt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-8xl font-bold tracking-wider" style={{
          background: 'linear-gradient(90deg, #FF6B9B 0%, #B66BFF 30%, #6BB5FF 60%, #6BE9FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingTop: '3%'
        }}>
          SIDDHARTH
        </h1>
        <h1 className="text-8xl font-bold tracking-wider" style={{
          background: 'linear-gradient(90deg, #FF6B9B 0%, #B66BFF 30%, #6BB5FF 60%, #6BE9FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingLeft: '10%'
        }}>
          NASHIKKAR
        </h1>
      </div>

     

      

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <div className="bg-gray-900/50 backdrop-blur-md px-8 py-4 rounded-full flex gap-8">
          <button className="hover:text-pink-500 transition-colors">
            <Home size={24} />
          </button>
          <button className="hover:text-pink-500 transition-colors">
            <Clock size={24} />
          </button>
          <button className="hover:text-pink-500 transition-colors">
            <Folder size={24} />
          </button>
          <button className="hover:text-pink-500 transition-colors">
            <Star size={24} />
          </button>
          <button className="hover:text-pink-500 transition-colors">
            <Mail size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;