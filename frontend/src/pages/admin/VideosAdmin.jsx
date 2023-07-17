import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const videoModel = {
  id: null,
  url: "",
  title: "",
  description: "",
  game_id: "",
  premium: "",
};

function FormAddVideo() {
  const [games, setGames] = useState([]);
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(videoModel);

  const getGames = async () => {
    try {
      const gamesData = await connexion.get("/games");
      setGames(gamesData);
    } catch (error) {
      console.error(error);
    }
  };

  const getVideos = async () => {
    try {
      const videosData = await connexion.get("/videos");
      setVideos(videosData);
    } catch (error) {
      console.error(error);
    }
  };

  const postVideo = async (event) => {
    event.preventDefault();
    try {
      const videoPost = await connexion.post("/videos", video);
      setVideo(videoPost.data);
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/videos/${video.id}`);
      setVideo(videoModel);
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/videos/${video.id}`, video);
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideo = (event) => {
    setVideo({ ...video, [event.target.name]: event.target.value });
  };

  const updateVideoState = (id) => {
    if (id === "") {
      setVideo(videoModel);
    } else {
      setVideo(videos.find((vid) => vid.id === +id));
    }
  };

  useEffect(() => {
    getGames();
    getVideos();
  }, []);

  return (
    <div className="videos-container form-container">
      <h2 className="main-titel">Liste de mes vidéos</h2>
      <select onChange={(event) => updateVideoState(event.target.value)}>
        <option value="">Choisir une vidéo</option>
        {videos.map((vid) => (
          <option key={vid.id} value={vid.id}>
            {vid.title} {vid.description}
          </option>
        ))}
      </select>

      <h2>Ajouter une video</h2>
      <form className="videos-container" onSubmit={(event) => postVideo(event)}>
        <label htmlFor="label" className="label-title">
          url video
          <input
            type="text"
            minLength={10}
            maxLength={255}
            name="url"
            className="basic-input animated"
            onChange={(event) => handleVideo(event)}
            value={video.url}
            required
          />
        </label>
        <label htmlFor="label" className="label-title">
          Title
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="title"
            className="basic-input animated"
            onChange={(event) => handleVideo(event)}
            value={video.title}
          />
        </label>

        <label htmlFor="label" className="label-title">
          Description
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="description"
            className="basic-input animated"
            onChange={(event) => handleVideo(event)}
            value={video.description}
          />
        </label>
        <h2>Liste de mes jeux</h2>
        <select
          name="game_id"
          onChange={(event) => handleVideo(event)}
          value={video.game_id}
        >
          <option value="">Choisir le jeu attribué</option>
          {games.map((game) => (
            <option value={game.id}>{game.label}</option>
          ))}
        </select>
        <h2>Mettre la vidéo en :</h2>
        <select
          name="premium"
          id=""
          value={video.premium}
          onChange={(event) => handleVideo(event)}
        >
          <option value="">Choisir la version </option>
          <option value="0">Publique</option>
          <option value="1">Premium</option>
        </select>
        {!video.id && (
          <button type="submit" className="main-btn teams-btn">
            Ajouter
          </button>
        )}
      </form>
      {video.id && (
        <>
          <button
            type="button"
            className="main-btn teams-btn"
            onClick={(event) => deleteVideo(event)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="main-btn teams-btn"
            onClick={(event) => updateVideo(event)}
          >
            Modifier
          </button>
        </>
      )}
    </div>
  );
}

export default FormAddVideo;
