import React, { useEffect } from "react";

function Teams() {
  // const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => res.json())
      .then((data) => console.info(data))
      .catch((err) => console.error(err));
  }, []);
  return <div>Teams</div>;
}

export default Teams;
