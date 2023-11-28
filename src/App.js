import React from 'react';
import './App.css'; // Import the CSS file for additional styling
import Card from 'react-bootstrap/Card'; //import the bootstrap
import playersData from './players'; // Import player data

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <div className="cards-container">
        {/*  use map for call the players */}
        {playersData.map((player, index) => (
          <Card className="player-card" key={index}>
            <Card.Img variant="top" src={player.imageUrl} alt={player.name} /> 
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
              <Card.Text>Team: {player.team}</Card.Text>
              <Card.Text>Nationality: {player.nationality}</Card.Text>
              <Card.Text>Jersey Number: {player.jerseyNumber}</Card.Text>
              <Card.Text>Age: {player.age}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
