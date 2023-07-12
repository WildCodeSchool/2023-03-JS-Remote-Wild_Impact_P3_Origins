import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const videoModel = {
  id: null,
  url: "",
  title: "",
  description: "",
  game_id: "",
};

function FormAddVideo() {
  const [games, setGames] = useState([]);
  const [video, setVideo] = useState(videoModel);

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
      const videoPost = await connexion.post("/videos", video);
      setVideo(videoPost.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/videos/${video.id}`);
      setVideo(videoModel);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideo = (event) => {
    setVideo({ ...video, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="formContainer">
      <h2>Ajouter une video</h2>
      <form onSubmit={(event) => postVideo(event)}>
        <label>
          url video
          <input
            type="text"
            minLength={10}
            maxLength={255}
            name="url"
            onChange={(event) => handleVideo(event)}
            value={video.url}
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
            value={video.title}
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
            value={video.description}
          />
        </label>
        <h2>Liste de mes jeux</h2>
        <select name="game_id" onChange={(event) => handleVideo(event)}>
          <option value="">Choisir le jeu attribué</option>
          {games.map((game) => (
            <option value={game.id}>{game.label}</option>
          ))}
        </select>
        {!video.id && (
          <button type="submit" className="btn btn-secondary col-5 m-2">
            Ajouter
          </button>
        )}
      </form>
      {video.id && (
        <button type="button" onClick={(event) => deleteVideo(event)}>
          Supprimer
        </button>
      )}
    </div>
  );
}

export default FormAddVideo;
