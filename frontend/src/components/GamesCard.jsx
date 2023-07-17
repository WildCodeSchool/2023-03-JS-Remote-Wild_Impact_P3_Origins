import React from "react";

function GamesCard({ game, setGameModalIsOpen, setGameData }) {
  const setDataGame = (gameData) => {
    setGameModalIsOpen(true);
    setGameData(gameData);
  };

  return (
    <div className="game-item">
      <img src={game.src} alt={game.alt} />
      <button
        type="button"
        onClick={() => setDataGame(game)}
        className="main-btn game-btn"
      >
        + Découvrir le jeux
      </button>
    </div>
  );
}

export default GamesCard;
