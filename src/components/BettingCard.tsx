import React from 'react';

interface BettingCardProps {
  match: {
    team1: string;
    team2: string;
    odds1: number;
    oddsDraw: number;
    odds2: number;
    time: string;
    league: string;
  };
}

export default function BettingCard({ match }: BettingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-sm text-gray-600 mb-2 flex justify-between">
        <span>{match.league}</span>
        <span>{match.time}</span>
      </div>
      
      <div className="text-center mb-4">
        <div className="font-semibold text-lg">{match.team1} vs {match.team2}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-center transition-colors">
          <div className="font-medium">{match.team1}</div>
          <div className="text-green-600 font-bold">{match.odds1}</div>
        </button>
        
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-center transition-colors">
          <div className="font-medium">Draw</div>
          <div className="text-green-600 font-bold">{match.oddsDraw}</div>
        </button>
        
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-center transition-colors">
          <div className="font-medium">{match.team2}</div>
          <div className="text-green-600 font-bold">{match.odds2}</div>
        </button>
      </div>
    </div>
  );
}