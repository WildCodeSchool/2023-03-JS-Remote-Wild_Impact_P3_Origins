import React from "react";
import PropTypes from "prop-types";

function GamesCard({ game }) {
  return (
    <div className="game-item" key={game.id}>
      <h2>{game.label}</h2>
      <img src={game.src} alt={game.alt} />
    </div>
  );
}

GamesCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default GamesCard;
