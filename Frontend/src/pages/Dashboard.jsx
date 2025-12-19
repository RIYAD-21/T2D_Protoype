import React, { useState } from 'react';
import Header from '../components/header';

const Dashboard = () => {
  const [typeFormation, setTypeFormation] = useState('Anglais Business');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Header Section */}
          <div className="col-span-4 text-4xl font-bold text-blue-700">
            Pilotage Qualité Formation
          </div>

          {/* Stats Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600">Nombre de participants</div>
            <div className="text-2xl font-bold">38</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600">Qualité (Score)</div>
            <div className="text-2xl font-bold">3.61</div>
          </div>

          {/* Performance Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <div className="text-sm text-gray-600">Performance Globale</div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-4xl font-bold text-red-500">72.2%</div>
              <div className="w-full h-2 bg-gray-300 rounded-full mt-4 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-red-500"
                  style={{ width: '72.2%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Dropdown for Type de Formation */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-lg font-medium text-gray-700">Type de formation</div>
              <div className="flex gap-2">
                {['Anglais Business', 'IT', 'Langue'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setTypeFormation(item)}
                    className={`px-4 py-2 rounded-lg ${
                      typeFormation === item ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 text-gray-600">Selected: {typeFormation}</div>
          </div>

          {/* Top Causes of Dissatisfaction Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <div className="text-sm text-gray-600">Top causes d'insatisfaction</div>
            <div className="flex justify-center mt-4">
              <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-700">
                68.75%
              </div>
              <div className="ml-6">
                <div className="flex gap-4">
                  <div className="text-sm text-blue-700">Contenu</div>
                  <div className="text-sm text-orange-500">6.25%</div>
                </div>
                <div className="flex gap-4 mt-2">
                  <div className="text-sm text-gray-700">Logistique</div>
                  <div className="text-sm text-blue-500">25%</div>
                </div>
                <div className="flex gap-4 mt-2">
                  <div className="text-sm text-gray-700">Applicabilité</div>
                  <div className="text-sm text-purple-500">68.75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;