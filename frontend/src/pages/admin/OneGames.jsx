import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function OneGames() {
  const params = useParams();
  const [gameData, setGameData] = useState([]);

  const getGames = async () => {
    try {
      const game = await connexion.get(`/games/${params.id}`);
      setGameData(game);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const handleUser = (event) => {
    setGameData({ ...gameData, [event.target.name]: event.target.value });
  };

  const notify = (update) => {
    if (update.status === 201) {
      toast.success(update.data.msg);
    } else if (update.status === 400) {
      toast.error(update.data.msg);
    }
  };

  const updateGame = async (event) => {
    event.preventDefault();
    try {
      const update = await connexion.put(`/games/${params.id}`, gameData);
      notify(update);
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  return (
    <div>
      <img
        className="imgUpdate"
        src={gameData.src}
        alt="profil de l'utilisateur"
      />

      <form onSubmit={updateGame}>
        <label htmlFor="label"> Nom </label>
        <input
          type="text"
          value={gameData.label}
          onChange={handleUser}
          name="label"
          required
        />

        <label htmlFor="acronyme"> Acronyme </label>
        <input
          type="text"
          value={gameData.acronyme}
          onChange={handleUser}
          name="acronyme"
          required
        />

        <label htmlFor="src"> Src </label>
        <input
          type="text"
          value={gameData.src}
          onChange={handleUser}
          name="src"
          required
        />

        <label htmlFor="alt"> Src </label>
        <input
          type="text"
          value={gameData.alt}
          onChange={handleUser}
          name="alt"
          required
        />

        <label htmlFor="logo"> Src </label>
        <input
          type="text"
          value={gameData.logo}
          onChange={handleUser}
          name="logo"
          required
        />

        <button type="submit">Modifier le jeu</button>
      </form>

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

export default OneGames;
