const remoteURL = "http://localhost:5002";

export default {
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((data) => data.json());
  },
  getUserByUsername(username) {
    return fetch(`${remoteURL}/users/?username=${username}`).then((data) =>
      data.json()
    );
  },
};
