import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const notify = (signup) => {
    if (signup.status === 201) {
      toast.success(signup.data.msg);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else if (signup.status === 409) {
      toast.info(signup.data.msg);
    } else {
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer dans quelques instants"
      );
    }
  };

  const createAccount = async (event) => {
    event.preventDefault();

    if (userSignup.password !== userSignup.passwordConfirmation) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
    const { passwordConfirmation, ...userData } = userSignup;

    try {
      const signup = await connexion.post("/signup", userData);
      notify(signup);
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  return (
    <div>
      <form onSubmit={createAccount}>
        <input
          type="email"
          value={userSignup.email}
          onChange={(event) => handleUser(event)}
          name="email"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          value={userSignup.password}
          onChange={(event) => handleUser(event)}
          name="password"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={userSignup.passwordConfirmation}
          onChange={(event) => handleUser(event)}
          name="passwordConfirmation"
          required
        />
        <label htmlFor="passwordConfirmation">Confirmer le mot de passe</label>

        <button type="submit">Signup</button>

        <ToastContainer
          autoClose={5000}
          position="top-center"
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}

export default Signup;
