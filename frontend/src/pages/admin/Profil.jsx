import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profil() {
  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profils/${id}`)
      .then((res) => res.json())
      .then((data) => console.info(data))
      .catch((err) => console.error(err));
  });
  return <div>Profil {id} </div>;
}

export default Profil;
