import localStorage from "./localStorageService";

function Session(fullname, userName, email) {
  (this.fullname = fullname), (this.userName = userName), (this.email = email);
  this.getFullname = () => this.fullname;
  this.getUserName = () => this.userName;
  this.getEmail = () => this.email;
}

const createSession = (esLogin, fullname, userName, email) => {
  let session = new Session(fullname, userName, email);
  localStorage.setItem("esLogin", esLogin);
  localStorage.setItem("session", JSON.stringify(session));
};

const destroySession = () => {
  localStorage.setItem("esLogin", false);
  localStorage.setItem("session", null);
};

export default { createSession, destroySession };
