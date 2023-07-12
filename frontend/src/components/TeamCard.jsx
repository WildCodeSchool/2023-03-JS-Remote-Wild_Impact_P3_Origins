import React from "react";
import PropTypes from "prop-types";
import TeamType from "../Types/team";

function TeamsCard({ team }) {

  return (
    <div className="Bloc2">
      <h2 className="titre">{team.name}</h2>
      <div className="image">
        <img src={team.src} alt={team.alt} className="poster" />
      </div>
    </div>
  );
}

TeamsCard.propTypes = {
  team: PropTypes.instanceOf(TeamType).isRequired,
};

export default TeamsCard;
