import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Remove authorization header from axios
    delete axios.defaults.headers.common['Authorization'];

    // Clear any other stored data
    localStorage.removeItem('refreshToken');

    // Reset axios instance
    axios.defaults.headers.common = {};

    // Redirect to /
    navigate('/');
  };

  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-full">
        <div className="text-3xl font-bold">T2D</div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;