import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const videoModel = {
  id: "",
  url: "",
  title: "",
  description: "",
  game_id: "",
};

function FormAddVideo() {
  const [games, setGames] = useState([]);

  const [videoToAdd, setVideoToAdd] = useState(videoModel);

  const getGames = async () => {
    try {
      const gamesData = await connexion.get("/games");
      setGames(gamesData);
    } catch (error) {
      console.error(error);
    }
  };

  const postVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/videos", videoToAdd);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideo = (event) => {
    setVideoToAdd({ ...videoToAdd, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getGames();
  }, []);

  console.info(videoToAdd);

  return (
    <div className="formContainer">
      <h2>Ajouter une video</h2>
      <form onSubmit={postVideo}>
        <label>
          url video
          <input
            type="text"
            minLength={10}
            maxLength={255}
            name="url"
            onChange={(event) => handleVideo(event)}
            value={videoToAdd.url}
            required
          />
        </label>
        <label>
          Title
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="title"
            onChange={(event) => handleVideo(event)}
            value={videoToAdd.title}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="description"
            onChange={(event) => handleVideo(event)}
            value={videoToAdd.description}
          />
        </label>
        <h2>Liste de mes vidéos</h2>
        <select name="game_id" onChange={(event) => handleVideo(event)}>
          <option value="">Choisir le jeu attribué</option>
          {games.map((game) => (
            <option value={game.id}>{game.label}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-secondary col-5 m-2">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default FormAddVideo;
