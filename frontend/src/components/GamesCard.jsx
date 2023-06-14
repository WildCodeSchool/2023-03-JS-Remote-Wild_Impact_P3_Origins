import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function GamesCard({ game }) {
  return <div>{game.name}</div>;
}

GamesCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/games`)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="Catalogue-main">
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Games;
