import localStorage from "./localStorageService";

const startServices = () => {
  const esLogin = localStorage.getItem("esLogin");
  const session = localStorage.getItem("session");
  const Hform = localStorage.getItem("Hform");
  if (!esLogin || !session) {
    localStorage.setItem("esLogin", false);
    localStorage.setItem("session", "null");
    localStorage.setItem("Hform", "login");
  }
};

startServices();

export default {
  startServices,
};
