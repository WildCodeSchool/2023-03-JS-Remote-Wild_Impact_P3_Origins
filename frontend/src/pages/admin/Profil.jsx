import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Profil() {
  const { id } = useParams();
  const [profil, setProfil] = useState([]);

  const getProfil = async () => {
    const ProfilData = await connexion.get(`/profils/${id}`);
    try {
      if (ProfilData) {
        setProfil(ProfilData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  console.info(profil);
  return (
    <div>
      Profil {id}
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

export default Profil;
