import localStorage from "./localStorageService";

function Session(id, name, lastname, userName, email) {
  (this.id = id),
    (this.name = name),
    (this.lastname = lastname),
    (this.userName = userName),
    (this.email = email);
  this.getId = () => this.id;
  this.getName = () => this.name;
  this.getLastName = () => this.lastname;
  this.getUserName = () => this.userName;
  this.getEmail = () => this.email;
}

const createSession = (esLogin, id, name, lastname, userName, email) => {
  let session = new Session(id, name, lastname, userName, email);
  localStorage.setItem("esLogin", esLogin);
  localStorage.setItem("session", JSON.stringify(session));
  localStorage.removeItem("Hform");
  location.href = "/user";
};

const destroySession = () => {
  localStorage.setItem("esLogin", false);
  localStorage.setItem("session", null);
};

export default { createSession, destroySession };
