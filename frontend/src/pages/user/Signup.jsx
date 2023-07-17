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
    } else if (signup.status === 409 || signup.status === 400) {
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
      <h1 className="maint-title">S'inscrire</h1>
      <form onSubmit={createAccount}>
        <div className="form-container">
          <input
            className="basic-input animated"
            type="email"
            value={userSignup.email}
            onChange={(event) => handleUser(event)}
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="basic-input formEntry animated"
            type="password"
            value={userSignup.password}
            onChange={(event) => handleUser(event)}
            name="password"
            placeholder="Password"
            required
          />
          <input
            className="basic-input formEntry animated"
            type="password"
            value={userSignup.passwordConfirmation}
            onChange={(event) => handleUser(event)}
            name="passwordConfirmation"
            placeholder="Confirm password"
            required
          />
          <div className="btn-container">
            <button type="submit" className="main-button">
              Signup
            </button>
          </div>
          <ToastContainer
            autoClose={5000}
            position="top-center"
            draggable
            pauseOnHover
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
