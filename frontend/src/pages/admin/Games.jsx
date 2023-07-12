import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer, Flip } from "react-toastify";
import GamesCard from "../../components/GamesCard";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Games() {
  const [games, setGames] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addGames, setAddGames] = useState({
    name: "",
    acronyme: "",
    src: "",
    alt: "",
    logo: "",
  });

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

  const addGame = (event) => {
    event.preventDefault();
    console.info(addGames);
  };

  return (
    <div>
      <button type="button" onClick={() => setModalIsOpen(true)}>
        Ajouter un jeux
      </button>

      <Modal
        isOpen={modalIsOpen}
        className="my-modal-class"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Ajouter un jeu</h2>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          Fermer
        </button>

        <form onSubmit={addGame}>
          <input
            type="name"
            value={addGames.name}
            onChange={(event) => handleUser(event)}
            name="name"
            required
          />
          <label htmlFor="name">Nom</label>

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

          <button type="submit">Signin</button>
        </form>
      </Modal>

      <div className="game-container">
        <h1>Liste des jeux</h1>
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
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
