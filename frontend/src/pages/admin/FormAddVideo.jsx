import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import connexion from "./connexion";

const videoModel = {
  url: "",
  title: "",
  description: "",
  release_date: "",
};

function FormAddVideo() {
  const [videoToAdd, setVideoToAdd] = useState(videoModel);
  const [videoToUpdate, setVideoToUpdate] = useState([]);

  const getVideos = async () => {
    const videosData = await connexion.get("/videos");
    try {
      if (videosData) {
        setVideoToUpdate(videosData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideos = (name, value) => {
    setVideoToAdd({ ...videoToAdd, [name]: value });
  };

  const postVideo = async () => {
    try {
      const videoData = await connexion.post("/videos/add", videoToAdd);
      setVideoToAdd(videoData);
      getVideos();
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async () => {
    try {
      const videoData = await connexion.update("/videos", videoToUpdate);
      await connexion.put(`/videos/${videoData.id}`, videoToUpdate);
    } catch (error) {
      console.error(error);
    }
  };

  const manageVideo = (event) => {
    event.preventDefault();
    if (videoToAdd.id) {
      updateVideo();
    } else {
      postVideo();
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="formContainer">
      <h2>Ajouter un video</h2>
      <form onSubmit={manageVideo}>
        <label>
          url video
          <input
            type="text"
            minLength={10}
            maxLength={255}
            name="url"
            onChange={(event) =>
              handleVideos(event.target.name, event.target.value)
            }
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
            onChange={(event) =>
              handleVideos(event.target.name, event.target.value)
            }
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
            onChange={(event) =>
              handleVideos(event.target.name, event.target.value)
            }
            value={videoToAdd.description}
          />
        </label>

        <label>
          Date de publication
          <input
            type="date"
            required
            minLength={10}
            maxLength={255}
            name="release_date"
            value={videoToAdd.release_date}
            onChange={(event) =>
              handleVideos(event.target.name, event.target.value)
            }
          />
        </label>
        {!videoToAdd.id && (
          <div className="row">
            <button
              type="submit"
              className="btn btn-secondary col-5 m-2"
              onClick={(e) => {
                e.preventDefault();
                setVideoToAdd(videoModel);
              }}
            >
              Ajouter
            </button>
          </div>
        )}
      </form>
      <Link to="/videos" target="_blank">
        <button type="button">Voir les videos</button>
      </Link>
    </div>
  );
}

export default FormAddVideo;
