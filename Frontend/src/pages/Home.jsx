import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="text-center max-w-2xl">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-2">T2D</h1>
          <p className="text-blue-100 text-lg">Training to Development</p>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to T2D
          </h2>
          <p className="text-blue-100 text-xl leading-relaxed">
            Transform your training experience with our comprehensive learning platform. 
            Monitor quality, track progress, and achieve your learning goals with ease.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-20">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="text-white font-semibold mb-2">Learn</h3>
            <p className="text-blue-100 text-sm">Access high-quality training content anytime, anywhere</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-20">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-2">Track</h3>
            <p className="text-blue-100 text-sm">Monitor your progress with detailed analytics and insights</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-20">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-white font-semibold mb-2">Achieve</h3>
            <p className="text-blue-100 text-sm">Reach your goals with personalized learning paths</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Register
          </button>
        </div>

        
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Home;