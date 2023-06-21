import React, { useState } from "react";
import PropTypes from "prop-types";
import TeamType from "../Types/team";

function TeamsCard({ team }) {
  const [teams, setTeams] = useState({
    id: null,
    name: "",
    acronym: "",
    src: "",
    alt: "",
  });

  // const updateTeams = (id) => {
  //   setTeams(id);
  // };
  // const handleTeam = (name, value) => {
  //   setTeams({ ...teams, [name]: value });
  // };

  const deleteTeams = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${team.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTeams(teams);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="Bloc2">
      <h2 className="titre">{team.name}</h2>
      <div className="image">
        <img src={team.src} alt={team.alt} className="poster" />
      </div>
      <button type="button" onClick={(event) => deleteTeams(event)}>
        Supprimer
      </button>
    </div>
  );
}

TeamsCard.propTypes = {
  team: PropTypes.instanceOf(TeamType).isRequired,
};

export default TeamsCard;
