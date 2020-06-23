import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    UserManager.getUserByUsername(credentials.userName).then((result) => {
      if (result[0].password === credentials.password) {
        props.setUser(result[0].id);
        props.history.push("/home");
      } else {
        window.alert("Incorrect Password.");
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="userName"
            id="userName"
            placeholder="Username"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputUserName">Username</label>

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

export default Login;
