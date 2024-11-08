import React, { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';

interface Match {
  team1: string;
  team2: string;
  odds1: number;
  oddsDraw: number;
  odds2: number;
  time: string;
  league: string;
}

export default function AdminPanel() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isAddingMatch, setIsAddingMatch] = useState(false);
  const [newMatch, setNewMatch] = useState<Match>({
    team1: '',
    team2: '',
    odds1: 1.0,
    oddsDraw: 1.0,
    odds2: 1.0,
    time: '',
    league: ''
  });

  const handleAddMatch = () => {
    setMatches([...matches, newMatch]);
    setIsAddingMatch(false);
    setNewMatch({
      team1: '',
      team2: '',
      odds1: 1.0,
      oddsDraw: 1.0,
      odds2: 1.0,
      time: '',
      league: ''
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Match Management</h2>
        <button
          onClick={() => setIsAddingMatch(true)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Match
        </button>
      </div>

      {isAddingMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Add New Match</h3>
              <button onClick={() => setIsAddingMatch(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Team 1</label>
                <input
                  type="text"
                  value={newMatch.team1}
                  onChange={(e) => setNewMatch({ ...newMatch, team1: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Team 2</label>
                <input
                  type="text"
                  value={newMatch.team2}
                  onChange={(e) => setNewMatch({ ...newMatch, team2: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">League</label>
                <input
                  type="text"
                  value={newMatch.league}
                  onChange={(e) => setNewMatch({ ...newMatch, league: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="text"
                  value={newMatch.time}
                  onChange={(e) => setNewMatch({ ...newMatch, time: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Team 1 Odds</label>
                <input
                  type="number"
                  step="0.01"
                  value={newMatch.odds1}
                  onChange={(e) => setNewMatch({ ...newMatch, odds1: parseFloat(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Draw Odds</label>
                <input
                  type="number"
                  step="0.01"
                  value={newMatch.oddsDraw}
                  onChange={(e) => setNewMatch({ ...newMatch, oddsDraw: parseFloat(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Team 2 Odds</label>
                <input
                  type="number"
                  step="0.01"
                  value={newMatch.odds2}
                  onChange={(e) => setNewMatch({ ...newMatch, odds2: parseFloat(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsAddingMatch(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMatch}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Match
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teams</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">League</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Odds</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matches.map((match, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  {match.team1} vs {match.team2}
                </td>
                <td className="px-6 py-4">{match.league}</td>
                <td className="px-6 py-4">{match.time}</td>
                <td className="px-6 py-4">
                  {match.odds1} | {match.oddsDraw} | {match.odds2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}