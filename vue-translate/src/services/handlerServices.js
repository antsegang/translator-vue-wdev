import localStorage from "./localStorageService";

const HformRegister = () => {
  localStorage.setItem("Hform", "register");
  location.href = "/";
};

const HformLogin = () => {
  localStorage.setItem("Hform", "login");
  location.href = "/";
};

export default {
  HformRegister,
  HformLogin,
};
