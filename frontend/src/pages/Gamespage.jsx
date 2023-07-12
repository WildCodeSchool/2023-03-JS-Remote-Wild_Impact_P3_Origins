import React, { useEffect, useState } from "react";
import GamesCard from "../components/GamesCard";
import connexion from "../services/connexion";
import Gamer from "../assets/Gamer.png";

function Gamespage() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const gamesData = await connexion.get("/games");
    try {
      if (gamesData) {
        setGames(gamesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  return (
    <div className="container">
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">Page des jeux</h2>
        </div>
        <div className="image-container">
          <img className="main-picture" src={Gamer} alt="esport" width="50%" />
        </div>
      </header>
      <main>
        {games.map((game) => (
          <GamesCard game={game} />
        ))}
      </main>
    </div>
  );
}

export default Gamespage;
