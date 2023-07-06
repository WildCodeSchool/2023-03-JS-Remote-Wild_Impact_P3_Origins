import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import { useCurrentUser } from "../../contexts/AuthContexts";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

import "./ProfilPage.scss";

function ProfilPage() {
  const { user } = useCurrentUser();
  const [profil, setProfil] = useState([]);

  const getProfil = async () => {
    try {
      const thisProfil = await connexion.get(`/profils/${user.id}`);
      setProfil(thisProfil);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProfil();
  }, []);

  if (!profil || profil.length === 0) {
    return <p>Chargement en cours...</p>;
  }

  const notify = (signin) => {
    if (signin.status === 204) {
      toast.success("Le profil a été modifié");
    } else if (signin.status === 400) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 409) {
      toast.error(signin.data.msg);
    }
  };

  const handleUser = (event) => {
    const updatedProfile = {
      ...profil,
      [event.target.name]: event.target.value,
    };
    setProfil(updatedProfile);
  };

  const UpdateProfil = async (event) => {
    event.preventDefault();
    try {
      const updateThisProfil = await connexion.put(`/profils`, profil);
      notify(updateThisProfil);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {profil.src ? (
        <img src={profil.src} alt="profil de l'utilisateur" />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png"
          alt="profil de l'utilisateur"
        />
      )}

      <form>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          value={profil.firstname}
          onChange={handleUser}
          name="firstname"
        />

        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          value={profil.lastname}
          onChange={handleUser}
          name="lastname"
        />

        <label htmlFor="src">Photo de profil</label>
        <input
          type="text"
          value={profil.src}
          onChange={handleUser}
          name="src"
        />

        <label htmlFor="email">Photo de profil</label>
        <input
          type="text"
          value={profil.email}
          onChange={handleUser}
          name="email"
        />

        <button
          type="button"
          className="main-btn profil-btn"
          onClick={(event) => UpdateProfil(event)}
        >
          Mettre a jour le profil
        </button>
      </form>
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

export default ProfilPage;
