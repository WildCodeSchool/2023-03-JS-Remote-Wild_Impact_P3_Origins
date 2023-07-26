import React, { useEffect, useState } from "react";
import GamesCard from "../components/GamesCard";
import connexion from "../services/connexion";
import HeaderSwiper from "../components/HeaderSwiper";
import FavorisSwiper from "../components/FavorisSwiper";

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
        <HeaderSwiper />
      </header>
      <main>
        <FavorisSwiper />
        <div className="main-title">
          <h2 className="jeux-title">Nos jeux</h2>
        </div>
        <div className="games-container">
          {games.map((game) => (
            <GamesCard game={game} />
          ))}
        </div>
        <div className="games-container">
          {games.map((game) => (
            <GamesCard game={game} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gamespage;
