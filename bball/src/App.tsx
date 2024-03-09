import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Header() {
  return (
    <header className="header">
      <h1>College Basketball Teams</h1>
      <p>Welcome to the 2024 NCAA Basketball Teams List</p>
      <p>Let's get ready for March Madness!</p>
    </header>
  );
}

function TeamCard({ team }: { team: Team }) {
  const { school, name, city, state } = team;

  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="team-list">
        {data.teams.map((team: Team, index: number) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
}

export default App;
