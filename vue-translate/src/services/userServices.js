import apiConfig from "./apiConfig";
import controllers from "./controllers";
import sessionServices from "./sessionServices.js";
import localStorage from "./localStorageService.js";

const login = async (email, password) => {
  const response = await apiConfig().get(controllers.users); //respuesta del api
  const users = response.data;

  //Esto devuleve un array
  const user = users.filter(
    (x) => x.email === email && x.password === password
  );
  if (user.length > 0) {
    const esLogin = user !== null && user.length > 0;
    const id = `${user[0].id}`;
    const name = `${user[0].name}`;
    const lastname = `${user[0].lastname}`;
    const userName = `${user[0].username}`;
    const email = `${user[0].email}`;
    sessionServices.createSession(esLogin, id, name, lastname, userName, email);
  } else if (user.length === 0) {
    alert("Datos incorrectos");
  }
  return;
};

const register = async (name, lastname, username, email, password) => {
  if (
    name === "" ||
    lastname === "" ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return {
      esRegistroExitoso: false,
      mensaje: "Todos los campos son requeridos",
    };
  }
  const response = await apiConfig().get(controllers.users);
  const users = response.data;
  // Verificar si el usuario ya existe
  const existingUser = users.filter(
    (x) => x.email === email || x.username === username
  );
  if (existingUser.length > 0) {
    return {
      esRegistroExitoso: false,
      mensaje: "Ya existe un usuario con ese email o nombre de usuario",
    };
  } else if (existingUser.length === 0) {
    // Crear un nuevo usuario
    const newUser = {
      name,
      lastname,
      email,
      password,
      username,
    };

    // Actualizar la lista de usuarios en el servidor
    await apiConfig().post(controllers.users, newUser);

    return {
      esRegistroExitoso: true,
      mensaje: "Registro exitoso",
      fullname: `${newUser.name} ${newUser.lastname}`,
      userName: `${newUser.username}`,
    };
  }
};

const editUser = async (id, name, lastname, username, email) => {
  const response = await apiConfig().get(`${controllers.users}/${id}`);
  const user = response.data;
  const session = JSON.parse(localStorage.getItem("session"));
  const esLogin = localStorage.getItem("esLogin");

  // Verificar si hay cambios en los datos del usuario
  const eName = name === "" ? user.name : name;
  const eLastname = lastname === "" ? user.lastname : lastname;
  const eUserName = username === "" ? session.userName : username;
  const eEmail = email === "" ? session.email : email;

  // Crear una copia del usuario con los datos actualizados
  const eUser = {
    ...user,
    name: eName,
    lastname: eLastname,
    userName: eUserName,
    email: eEmail,
  };

  // Actualizar la lista de usuarios en el servidor
  await apiConfig().put(`${controllers.users}/${id}`, eUser);

  sessionServices.createSession(
    esLogin,
    id,
    eUser.name,
    eUser.lastname,
    eUser.userName,
    eUser.email
  );

  return {
    esEdicionExitosa: true,
    mensaje: "Edición exitosa",
  };
};

export default {
  login,
  register,
  editUser,
};
