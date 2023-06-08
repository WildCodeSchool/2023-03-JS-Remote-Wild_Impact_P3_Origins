import React, { useEffect, useState } from "react";

function Profils() {
  const [profils, setProfils] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profils`)
      .then((res) => res.json())
      .then((data) => setProfils(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <main>
      <h1>User's Profils</h1>
      {profils.map((profil) => (
        <h2 key={profil.id}>
          {" "}
          {profil.firstname} {profil.lastname}{" "}
        </h2>
      ))}
    </main>
  );
}

export default Profils;
