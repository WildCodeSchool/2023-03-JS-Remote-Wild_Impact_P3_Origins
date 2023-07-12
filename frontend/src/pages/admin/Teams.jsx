import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import TeamCard from "../../components/TeamCard";
import "react-toastify/dist/ReactToastify.css";

const teamModel = {
  name: "",
  acronym: "",
  src: "",
  alt: "",
};

function Teams() {
  const [teams, setTeams] = useState([]);
  const [teamAdd, setTeamAdd] = useState(teamModel);
  const [teamToUpdate, setTeamToUpdate] = useState([]);

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

  const postTeam = async () => {
    try {
      const addTeamData = await connexion.post("/teams", teamModel);
      setTeamAdd(addTeamData);
      getTeams();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateTeam = async () => {
    try {
      const teamData = connexion.get(`/teams`);
      await connexion.put(`/teams/${teamData.id}`, teamToUpdate);
      setTeamToUpdate(teamData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const manageTeam = (event) => {
    event.preventDefault();
    if (teamAdd.id) {
      updateTeam();
    } else {
      postTeam();
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const handleTeam = (name, value) => {
    setTeams({ ...teams, [name]: value });
  };

  return (
    <div className="Bloc1">
      <form onSubmit={(event) => manageTeam(event)}>
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
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}

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
