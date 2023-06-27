import React, { useState } from "react";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(userSignup),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
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
