import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GamesCard({ game }) {
  return (
    <Link to={`${game.id}`}>
      <div className="game-item" key={game.id}>
        <img src={game.src} alt={game.alt} />
      </div>
    </Link>
  );
}

GamesCard.propTypes = {
  game: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default GamesCard;
