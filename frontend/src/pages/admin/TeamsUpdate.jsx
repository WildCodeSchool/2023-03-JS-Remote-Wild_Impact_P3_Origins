import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TeamsUpdate() {
  const { id } = useParams();
  const [team, setTeam] = useState({
    id: null,
    name: "",
    acronym: "",
    src: "",
    alt: "",
  });

  const getTeam = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  };

  const handleTeam = (name, value) => {
    setTeam({ ...team, [name]: value });
  };

  const updateTeam = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams/${team.id}`, {
      method: "PUT",
      body: JSON.stringify(team),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <form onSubmit={updateTeam}>
      <label>
        Name
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="name"
          value={team.name}
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
        />
      </label>

      <label>
        Acronym
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="acronym"
          value={team.acronym}
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
        />
      </label>

      <label>
        Source image
        <input
          type="text"
          required
          minLength={10}
          maxLength={255}
          name="src"
          value={team.src}
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
        />
      </label>

      <label>
        Alt
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="alt"
          value={team.alt}
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
        />
      </label>

      <button type="submit">Modifier</button>
    </form>
  );
}

export default TeamsUpdate;
