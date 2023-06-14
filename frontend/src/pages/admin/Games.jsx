import React, { useEffect, useState } from "react";
import "./Games.scss";
import GamesCard from "../../components/GamesCard";

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
        <GamesCard game={game} />
      ))}
    </div>
  );
}

export default Games;
