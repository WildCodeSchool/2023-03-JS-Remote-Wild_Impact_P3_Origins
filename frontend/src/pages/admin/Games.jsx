import React, { useEffect, useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import GamesCard from "../../components/GamesCard";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Games() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const gamesData = await connexion.get("/games");
    try {
      if (gamesData) {
        setGames(gamesData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="game-container">
      <h1>Liste des jeux</h1>
      {games.map((game) => (
        <GamesCard game={game} />
      ))}

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

export default Games;
