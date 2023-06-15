import React, { useState } from "react";
import connexion from "../../services/connexion";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/signup", userSignup);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
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

        <button type="button" onClick={(event) => login(event)}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
