import React, { useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../contexts/AuthContexts";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });

  console.info("Admin :eric.jean@exemple.fr OU sacha.comete@exemple.fr");
  console.info(
    "User premium : jean.dubalcon@exemple.fr OU aled.oskour@exemple.fr"
  );
  console.info("MDP => 123123");

  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const notify = (signin) => {
    if (signin.status === 200) {
      toast.success("Connexion réussie");
    } else if (signin.status === 400) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 401) {
      toast.error("Les informations de connexion sont incorrectes");
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const signin = await connexion.post("/signin", userSignin);
      notify(signin);

      if (signin.status === 200) {
        const profil = {
          role: signin.data.role,
          id: signin.data.id,
          firstname: signin.data.firstname,
          premium: signin.data.premium === 1,
          connected: true,
        };
        setUser(profil);

        if (profil.role === "admin") {
          setTimeout(() => {
            navigate("/admin/");
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer dans quelques instants"
      );
    }
  };

  return (
    <div>
      <h1 className="main-title">Se connecter</h1>
      <form onSubmit={login}>
        <div className="form-container">
          <input
            className="basic-input animated"
            type="email"
            value={userSignin.email}
            onChange={(event) => handleUser(event)}
            name="email"
            placeholder="Email"
            required
          />

          <input
            className="basic-input forEntry animated"
            type="password"
            value={userSignin.password}
            onChange={(event) => handleUser(event)}
            name="password"
            placeholder="Password"
            required
          />

          <div className="btn-container">
            <button type="submit" className="main-button">
              Signin
            </button>
          </div>

          <ToastContainer
            autoClose={2000}
            position="top-center"
            draggable
            transition={Flip}
            toastClassName="custom-toast"
          />
        </div>
      </form>
    </div>
  );
}

export default Signin;
