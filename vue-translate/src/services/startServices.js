import localStorage from "./localStorageService";

const startServices = () => {
  let esLogin = localStorage.getItem("esLogin");
  let session = localStorage.getItem("session");
  let Hform = localStorage.getItem("Hform");
  if (!esLogin && !session && !Hform) {
    localStorage.setItem("esLogin", false);
    localStorage.setItem("session", "null");
    localStorage.setItem("Hform", "login");
  }
};

startServices();

export default {
  startServices,
};
