import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Register = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const constructNewUser = (event) => {
    event.preventDefault();
    if (credentials.username === "" || credentials.password === "") {
      window.alert("Please enter a Username and Password");
    } else {
      // Should check if user exists already, handle either case
      UserManager.post(credentials).then((returnedUserObj) => {
        props.setUser(returnedUserObj.id);
        props.history.push("/home");
      });
    }
  };

  return (
    <form onSubmit={constructNewUser}>
      <fieldset>
        <h3>Please sign up</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="username"
            id="username"
            placeholder="Username"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputUsername">Username</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Register;
