import localStorage from "./localStorageService";

const HformRegister = () => {
  localStorage.setItem("Hform", "register");
};

const HformLogin = () => {
  localStorage.setItem("Hform", "login");
};

export default {
  HformRegister,
  HformLogin,
};
