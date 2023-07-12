import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Profils() {
  const [profils, setProfils] = useState([]);

  const getProfils = async () => {
    const profilsData = await connexion.get("/profils");
    try {
      if (profilsData) {
        setProfils(profilsData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getProfils();
  }, []);

  return (
    <main>
      <h1>User's Profils</h1>
      {profils.map((profil) => (
        <Link to={`/admin/profils/${profil.id}`}>
          <h2 key={profil.id}>
            {profil.firstname} {profil.lastname}
          </h2>
        </Link>
      ))}
      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </main>
  );
}

export default Profils;
