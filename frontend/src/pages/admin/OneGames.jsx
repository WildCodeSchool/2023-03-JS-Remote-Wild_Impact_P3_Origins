import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function OneGames() {
  const params = useParams();
  const [gameData, setGameData] = useState([]);
  const navigate = useNavigate();

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

  const notify = (notif) => {
    if (notif.status === 201) {
      toast.success(notif.data.msg);
    } else if (notif.status === 400) {
      toast.error(notif.data.msg);
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

  const deleteGame = async () => {
    try {
      const destroy = await connexion.delete(`/games/${params.id}`, gameData);
      toast.info(destroy.msg);
      setTimeout(() => {
        navigate("/admin/games");
      }, 2000);
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

      <button type="button" onClick={() => deleteGame()}>
        Supprimer
      </button>

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
