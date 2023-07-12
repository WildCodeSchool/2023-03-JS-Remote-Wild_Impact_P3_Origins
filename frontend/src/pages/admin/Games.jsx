import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer, Flip } from "react-toastify";
import GamesCard from "../../components/GamesCard";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

const gameModel = {
  label: "",
  acronyme: "",
  src: "",
  alt: "",
  logo: "",
};

function Games() {
  const [games, setGames] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [gameModalIsOpen, setGameModalIsOpen] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [addGames, setAddGames] = useState(gameModel);

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

  const handleUser = (event) => {
    setAddGames({ ...addGames, [event.target.name]: event.target.value });
  };

  const handleGameData = (event) => {
    setGameData({ ...gameData, [event.target.name]: event.target.value });
  };

  const notify = (pushGames) => {
    if (pushGames.status === 201) {
      toast.success(pushGames.data.msg);
    } else if (pushGames.status === 400) {
      toast.error(pushGames.data.msg);
    }
  };

  const addGame = async (event) => {
    event.preventDefault();
    try {
      const pushGames = await connexion.post("/games", addGames);
      notify(pushGames);
      getGames();
      setAddGames(gameModel);
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  const updateGame = async (event) => {
    event.preventDefault();
    try {
      const update = await connexion.put(`/games/${gameData.id}`, gameData);
      notify(update);
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  const deleteGame = async () => {
    try {
      const destroy = await connexion.delete(`/games/${gameData.id}`, gameData);
      toast.info(destroy.msg);
      setGameModalIsOpen(false);
      getGames();
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  return (
    <div>
      <button type="button" onClick={() => setModalIsOpen(true)}>
        Ajouter un jeux
      </button>

      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Ajouter un jeu</h2>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          Fermer
        </button>

        <form onSubmit={addGame}>
          <input
            type="label"
            value={addGames.label}
            onChange={(event) => handleUser(event)}
            name="label"
            required
          />
          <label htmlFor="label">Nom</label>

          <input
            type="acronyme"
            value={addGames.acronyme}
            onChange={(event) => handleUser(event)}
            name="acronyme"
            required
          />
          <label htmlFor="acronyme">Acronyme</label>

          <input
            type="src"
            value={addGames.src}
            onChange={(event) => handleUser(event)}
            name="src"
            required
          />
          <label htmlFor="src">src</label>

          <input
            type="alt"
            value={addGames.alt}
            onChange={(event) => handleUser(event)}
            name="alt"
            required
          />
          <label htmlFor="alt">alt</label>

          <input
            type="logo"
            value={addGames.logo}
            onChange={(event) => handleUser(event)}
            name="logo"
            required
          />
          <label htmlFor="logo">logo</label>

          <button type="submit">Ajouter</button>
        </form>
      </Modal>

      <Modal
        isOpen={gameModalIsOpen}
        className="Modal"
        onRequestClose={() => setGameModalIsOpen(false)}
      >
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
            onChange={handleGameData}
            name="label"
            required
          />

          <label htmlFor="acronyme"> Acronyme </label>
          <input
            type="text"
            value={gameData.acronyme}
            onChange={handleGameData}
            name="acronyme"
            required
          />

          <label htmlFor="src"> Src </label>
          <input
            type="text"
            value={gameData.src}
            onChange={handleGameData}
            name="src"
            required
          />

          <label htmlFor="alt"> Src </label>
          <input
            type="text"
            value={gameData.alt}
            onChange={handleGameData}
            name="alt"
            required
          />

          <label htmlFor="logo"> Src </label>
          <input
            type="text"
            value={gameData.logo}
            onChange={handleGameData}
            name="logo"
            required
          />
          <button type="submit">Modifier le jeu</button>
        </form>

        <button type="button" onClick={() => deleteGame()}>
          Supprimer
        </button>
      </Modal>

      <div className="game-container">
        <h1>Liste des jeux</h1>
        {games.map((game) => (
          <GamesCard
            key={game.id}
            game={game}
            setGameData={setGameData}
            setGameModalIsOpen={setGameModalIsOpen}
          />
        ))}

        <ToastContainer
          autoClose={2000}
          position="top-center"
          draggable
          transition={Flip}
          toastClassName="custom-toast"
        />
      </div>
    </div>
  );
}

export default Games;
