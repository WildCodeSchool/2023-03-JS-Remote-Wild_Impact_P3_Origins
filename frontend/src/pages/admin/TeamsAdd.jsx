import React, { useState, useEffect } from "react";

function TeamsAdd() {
  const [teams, setTeams] = useState({
    name: "",
    acronym: "",
    src: "",
    alt: "",
  });

  const getTeams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  };

  const handleTeam = (name, value) => {
    setTeams({ ...teams, [name]: value });
  };

  const postTeams = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`, {
      method: "POST",
      body: JSON.stringify(teams),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.info(json))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <form onSubmit={(event) => postTeams(event)}>
      <label>
        Name
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="name"
          value={teams.name}
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
          value={teams.acronym}
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
          value={teams.src}
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
          value={teams.alt}
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TeamsAdd;
