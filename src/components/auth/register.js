import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...user, ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
    setCredentials(stateToChange);
  };

  const constructNewUser = (event) => {
    event.preventDefault();
    if (user.username === "" || user.password === "") {
      window.alert("Please enter a Username and Password");
    } else {
      props.setUser(credentials);
      UserManager.post(user).then(() => props.history.push("/home"));
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
