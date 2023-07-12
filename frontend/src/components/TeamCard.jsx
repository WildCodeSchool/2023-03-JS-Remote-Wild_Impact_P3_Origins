import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TeamType from "../Types/team";

function TeamsCard({ team }) {
  const deleteTeam = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${team.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  return (
    <div className="Bloc2">
      <h2 className="titre">{team.name}</h2>
      <div className="image">
        <img src={team.src} alt={team.alt} className="poster" />
      </div>
      <form onSubmit={deleteTeam}>
        <button type="submit">Supprimer</button>
        <button type="button">
          <Link to={`/admin/teams/${team.id}`}>Modifier</Link>
        </button>
      </form>
    </div>
  );
}

TeamsCard.propTypes = {
  team: PropTypes.instanceOf(TeamType).isRequired,
};

export default TeamsCard;
