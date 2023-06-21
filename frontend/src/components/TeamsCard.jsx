import React, { useEffect, useState } from "react";
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

  const getTeams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  };

  const deleteTeams = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${team.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTeams(teams);
        getTeams();
      })
      .catch((err) => console.error(err));
  };

  const updateTeams = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${teams.id}`, {
      method: "PUT",
      body: JSON.stringify(teams),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setTeams(json);
        getTeams();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="Bloc2">
      <h2 className="titre">{team.name}</h2>
      <div className="image">
        <img src={team.src} alt={team.alt} className="poster" />
      </div>
      <button type="button" onClick={(event) => deleteTeams(event)}>
        Supprimer
      </button>
      <button type="button" onClick={(event) => updateTeams(event)}>
        Modifier
      </button>
    </div>
  );
}

TeamsCard.propTypes = {
  team: PropTypes.instanceOf(TeamType).isRequired,
};

export default TeamsCard;
