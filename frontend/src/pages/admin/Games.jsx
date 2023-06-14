import React, { useEffect, useState } from "react";
import "./Games.scss";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/games`)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="game-container">
      <h1>Liste des jeux</h1>
      {games.map((game) => (
        <div className="game-item" key={game.id}>
          <h2>{game.label}</h2>
          <img src={game.src} alt={game.alt} />
        </div>
      ))}
    </div>
  );
}

export default Games;
