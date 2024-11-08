import React from 'react';
import { Trophy, Wallet, User, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold">BetPro</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <Wallet className="h-5 w-5 mr-2" />
            <span className="font-semibold">$1,000.00</span>
          </div>
          <Bell className="h-6 w-6 cursor-pointer hover:text-yellow-500 transition-colors" />
          <User className="h-6 w-6 cursor-pointer hover:text-yellow-500 transition-colors" />
        </div>
      </div>
    </header>
  );
}