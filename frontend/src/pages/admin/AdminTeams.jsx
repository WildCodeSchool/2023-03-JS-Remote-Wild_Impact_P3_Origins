import React, { useState } from "react";

function AdminTeams() {
  const [teams, setTeams] = useState({
    name: "",
    acronym: "",
    src: "",
    alt: "",
  });

  const handleTeams = (name, value) => {
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
    <div>
      <form onSubmit={(event) => postTeams(event)}>
        <label htmlFor="">
          Name
          <input
            type="text"
            required
            minLength={1}
            name="name"
            onChange={(event) =>
              handleTeams(event.target.name, event.target.value)
            }
            value={teams.name}
          />
        </label>
        <label htmlFor="">
          acronym
          <input
            type="text"
            required
            minLength={1}
            name="acronym"
            onChange={(event) =>
              handleTeams(event.target.name, event.target.value)
            }
            value={teams.acronym}
          />
        </label>
        <label htmlFor="">
          Source image
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="src"
            onChange={(event) =>
              handleTeams(event.target.name, event.target.value)
            }
            value={teams.src}
          />
        </label>
        <label htmlFor="">
          Alt
          <input
            type="text"
            required
            minLength={1}
            name="alt"
            onChange={(event) =>
              handleTeams(event.target.name, event.target.value)
            }
            value={teams.alt}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminTeams;
