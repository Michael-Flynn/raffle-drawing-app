import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const RaffleDrawing = () => {
  const [participants, setParticipants] = useState([]);
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch('./raffledrawing.json');
        const data = await response.json();
        const participantNames = data.map((participant) => `${participant['First Name']} ${participant['Last Name']}`);
        setParticipants(participantNames);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchParticipants();
  }, []);

  const handleDrawWinner = async () => {
    if (participants.length === 0) {
      alert('No participants to draw from!');
      return;
    }

    setLoading(true);
    setConfettiActive(true);

    await new Promise((resolve) => setTimeout(resolve, 5000)); // 5-second duration for confetti animation

    const randomIndex = Math.floor(Math.random() * participants.length);
    const winnerName = participants[randomIndex];
    setWinners([...winners, winnerName]);

    setParticipants(participants.filter((participant) => participant !== winnerName));

    setLoading(false);
    setConfettiActive(false); // Disable confetti animation after timer
  };

  return (
    <div className="container">
      <h2>Raffle Drawing Program</h2>
      <div className="button-container">
        <button onClick={handleDrawWinner} disabled={loading} className="styled-button">
          {loading ? 'Drawing Winner...' : 'Draw Winner'}
        </button>
      </div>
      {winners.map((winner, index) => (
        <div key={index}>
          <h1 className="flashing-gradient">{winner}</h1>
          <Confetti
            key={index} // Ensure a unique key for each Confetti component
            opacity={1}
            numberOfPieces={400}
            recycle={false}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
      ))}
    </div>
  );
};

export default RaffleDrawing;
