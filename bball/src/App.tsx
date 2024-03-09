import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

function App() {
  return (
    <div className="App">
      <header>
        <h1>College Basketball Teams</h1>
      </header>
      <div className="team-list">
        {data.teams.map((team, index) => (
          <div key={index} className="team-card">
            <h2>{team.school}</h2>
            <p>Mascot: {team.name}</p>
            <p>
              Location: {team.city}, {team.state}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
