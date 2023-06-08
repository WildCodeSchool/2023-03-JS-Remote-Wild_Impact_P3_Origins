import React, { useEffect } from "react";

function Profils() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/profils`)
      .then((res) => res.json())
      .then((data) => console.info(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <main>
      <h1>User's Profils</h1>
    </main>
  );
}

export default Profils;
