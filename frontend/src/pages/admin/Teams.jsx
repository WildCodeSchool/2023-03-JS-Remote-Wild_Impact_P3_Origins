import React, { useState, useEffect } from "react";
import TeamsCard from "../../components/TeamsCard";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="Bloc1">
      {teams.map((team) => (
        <TeamsCard team={team} />
      ))}
    </div>
  );
}

export default Teams;
