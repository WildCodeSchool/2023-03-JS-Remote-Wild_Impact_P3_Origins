import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";

function Teampage() {
  const { id } = useParams();
  const [team, setTeam] = useState([]);

  const getTeam = async () => {
    const TeamData = await connexion.get(`/teams/${id}`);
    try {
      if (TeamData) {
        setTeam(TeamData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue, pas de chance.");
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div className="Team-container">
      <h2 className="titre">{team.name}</h2>
      <div className="image">
        <img src={team.src} alt={team.alt} className="poster" />
      </div>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </div>
  );
}

export default Teampage;
