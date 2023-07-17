import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

const teamModel = {
  id: null,
  name: "",
  acronym: "",
  src: "",
  alt: "",
};

function Teams() {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState(teamModel);

  const getTeams = async () => {
    try {
      const teamsData = await connexion.get("/teams");
      setTeams(teamsData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const postTeam = async (event) => {
    event.preventDefault();
    try {
      const teamData = await connexion.post("/teams", team);
      setTeam(teamData.data);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateTeamState = (id) => {
    if (id === 0) {
      setTeam(teamModel);
    } else {
      setTeam(teams.find((tm) => tm.id === +id));
    }
  };

  const updateTeam = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/teams/${team.id}`, team);
      setTeam(teamModel);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const deleteTeam = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/teams/${team.id}`);
      setTeam(teamModel);
      getTeams();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleTeam = (name, value) => {
    setTeam({ ...team, [name]: value });
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="teams_container form-container">
      <div>
        <label htmlFor="" className="label-title">
          Choisir une team
          <select onChange={(event) => updateTeamState(+event.target.value)}>
            <option value={0}>Rafraichir</option>
            {teams.map((tm) => (
              <option key={tm.id} value={tm.id}>
                {tm.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <img src={team.src} alt="imagerie d'equipe" />
      </div>
      <form className="teams-container" onSubmit={(event) => postTeam(event)}>
        <label htmlFor="label" className="label-title">
          Name
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="name"
            className="basic-input animated"
            value={team.name}
            onChange={(event) =>
              handleTeam(event.target.name, event.target.value)
            }
          />
        </label>

        <label htmlFor="label" className="label-title">
          Acronym
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="acronym"
            className="basic-input animated"
            value={team.acronym}
            onChange={(event) =>
              handleTeam(event.target.name, event.target.value)
            }
          />
        </label>

        <label htmlFor="label" className="label-title">
          Source image
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="src"
            className="basic-input animated"
            value={team.src}
            onChange={(event) =>
              handleTeam(event.target.name, event.target.value)
            }
          />
        </label>

        <label htmlFor="label" className="label-title">
          Alt
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="alt"
            className="basic-input animated"
            value={team.alt}
            onChange={(event) =>
              handleTeam(event.target.name, event.target.value)
            }
          />
        </label>
        {!team.id && (
          <button type="submit" className="main-btn teams-btn">
            Ajouter
          </button>
        )}
      </form>
      {team.id && (
        <>
          <button
            type="button"
            className="main-btn teams-btn"
            onClick={(event) => deleteTeam(event)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="main-btn teams-btn"
            onClick={(event) => updateTeam(event)}
          >
            Modifier
          </button>
        </>
      )}

      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </div>
  );
}
export default Teams;
