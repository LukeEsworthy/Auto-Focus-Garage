const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/userBios/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/userBios`).then((result) => result.json());
  },
  getUserBiosById(id) {
    return fetch(`${remoteURL}/userBios?userId=${id}`).then((result) =>
      result.json()
    );
  },
  post(newUserBio) {
    return fetch(`${remoteURL}/userBios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserBio),
    }).then((data) => data.json());
  },
  update(editedUserBio) {
    return fetch(`${remoteURL}/userBios/${editedUserBio.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUserBio),
    }).then((data) => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/userBios/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
};
