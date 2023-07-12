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
  const [team, setTeam] = useState(teamModel);
  const [teams, setTeams] = useState([]);
  // const [teamAdd, setTeamAdd] = useState(teamModel);
  // const [teamToUpdate, setTeamToUpdate] = useState([]);

  const getTeams = async () => {
    const teamsData = await connexion.get("/teams");
    try {
      if (teamsData) {
        setTeams(teamsData);
      }
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

  // const updateTeam = async () => {
  //   try {
  //     const teamData = connexion.get(`/teams`);
  //     await connexion.put(`/teams/${team.id}`, teamToUpdate);
  //     setTeamToUpdate(teamData);
  //   } catch (error) {
  //     toast.error("Une erreur est survenue");
  //   }
  // };

  const deleteTeam = (event) => {
    event.preventDefault();
    try {
      const teamData = connexion.delete(`/teams/${team.id}`, team);
      setTeam(teamData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  useEffect(() => {
    // getTeam();
    getTeams();
  }, []);

  const handleTeam = (name, value) => {
    setTeam({ ...team, [name]: value });
  };
  console.info(teams);

  return (
    <div className="Bloc1">
      <form onSubmit={(event) => postTeam(event)}>
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
        {!team.id && <button type="submit">Ajouter</button>}
      </form>
      {team.id && (
        <button type="button" onClick={(event) => deleteTeam(event)}>
          Supprimer
        </button>
      )}
      {/* {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))} */}

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
