import React from 'react';
import { Football, Basketball, Baseball, Tennis } from 'lucide-react';

const sports = [
  { name: 'Soccer', icon: Football },
  { name: 'Basketball', icon: Basketball },
  { name: 'Baseball', icon: Baseball },
  { name: 'Tennis', icon: Tennis },
];

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Sports</h2>
        {sports.map((sport) => (
          <div
            key={sport.name}
            className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <sport.icon className="h-5 w-5" />
            <span>{sport.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}