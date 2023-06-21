import React, { useState } from "react";

function TeamsAdd() {
  const [teams, setTeams] = useState({
    name: "",
    acronym: "",
    src: "",
    alt: "",
  });

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
          onChange={(event) =>
            handleTeam(event.target.name, event.target.value)
          }
          value={teams.name}
        />
      </label>

      <label>
        Acronym
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="acronyme"
          onChange={(event) =>
            handleTeam(event.target.acronyme, event.target.value)
          }
          value={teams.acronyme}
        />
      </label>

      <label>
        Source image
        <input
          type="text"
          required
          minLength={10}
          maxLength={255}
          name="source"
          onChange={(event) =>
            handleTeam(event.target.source, event.target.value)
          }
          value={teams.source}
        />
      </label>

      <label>
        Alt
        <input
          type="text"
          required
          minLength={1}
          maxLength={255}
          name="alternatif"
          onChange={(event) =>
            handleTeam(event.target.alternatif, event.target.value)
          }
          value={teams.alternatif}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TeamsAdd;
