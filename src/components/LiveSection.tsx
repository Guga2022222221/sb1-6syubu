import React from 'react';

const liveMatches = [
  {
    id: 1,
    team1: 'Liverpool',
    team2: 'Arsenal',
    score: '2-1',
    time: "75'",
    odds: 1.95
  },
  {
    id: 2,
    team1: 'Lakers',
    team2: 'Warriors',
    score: '89-92',
    time: "Q4 5:30",
    odds: 2.10
  }
];

export default function LiveSection() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Live Now</h2>
      <div className="space-y-4">
        {liveMatches.map((match) => (
          <div key={match.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold">{match.team1} vs {match.team2}</div>
                <div className="text-yellow-500 font-bold">{match.score}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">{match.time}</div>
                <button className="bg-green-600 px-3 py-1 rounded mt-1 hover:bg-green-700 transition-colors">
                  {match.odds}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}