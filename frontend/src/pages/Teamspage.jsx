import React, { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import HeaderSwiper from "../components/HeaderSwiper";
import FavorisSwiper from "../components/FavorisSwiper";

function Teamspage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <header className="header-container">
        <HeaderSwiper />
        <div className="Teams-title">
          <h2 className="header-title">Page des équipes</h2>
        </div>
      </header>
      <div className="Teams-container">
        <FavorisSwiper />
        <div className="Teams-main">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teamspage;
