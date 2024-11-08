import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BettingCard from './components/BettingCard';
import LiveSection from './components/LiveSection';
import LoginForm from './components/auth/LoginForm';
import AdminPanel from './components/admin/AdminPanel';

const upcomingMatches = [
  {
    team1: 'Manchester City',
    team2: 'Chelsea',
    odds1: 1.85,
    oddsDraw: 3.40,
    odds2: 4.50,
    time: 'Today 20:45',
    league: 'Premier League'
  },
  {
    team1: 'Real Madrid',
    team2: 'Barcelona',
    odds1: 2.10,
    oddsDraw: 3.30,
    odds2: 3.60,
    time: 'Tomorrow 21:00',
    league: 'La Liga'
  },
  {
    team1: 'PSG',
    team2: 'Bayern Munich',
    odds1: 2.40,
    oddsDraw: 3.50,
    odds2: 2.90,
    time: 'Tomorrow 20:00',
    league: 'Champions League'
  }
];

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (adminStatus: boolean) => {
    setIsAdmin(adminStatus);
    setShowLogin(false);
  };

  if (showLogin) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {isAdmin ? (
              <AdminPanel />
            ) : (
              <>
                <div className="mb-6 flex justify-end">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Staff Login
                  </button>
                </div>
                <LiveSection />
                <h2 className="text-2xl font-bold mt-8 mb-6">Upcoming Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingMatches.map((match, index) => (
                    <BettingCard key={index} match={match} />
                  ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;