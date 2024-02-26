import apiConfig from "./apiConfig";
import controllers from "./controllers";
import sessionServices from "./sessionServices.js";

const login = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const response = await apiConfig().get(controllers.users); //respuesta del api
  const users = response.data;

  //Esto devuleve un array
  const user = users.filter(
    (x) => x.email === email && x.password === password
  );
  if (user.length > 0) {
    let esLogin = user !== null && user.length > 0;
    let fullname = `${user[0].name} ${user[0].lastname}`;
    let userName = `${user[0].username}`;
    let email = `${user[0].email}`;
    sessionServices.createSession(esLogin, fullname, userName, email);
  } else if (user.length === 0) {
    console.log("Datos incorrectos");
  }
  return;
};

const register = async () => {
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
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

    // Agregar el nuevo usuario al array de usuarios
    users.push(newUser);

    // Actualizar la lista de usuarios en el servidor
    await apiConfig().put(controllers.users, { users });

    alert("Registro exitoso");

    return {
      esRegistroExitoso: true,
      mensaje: "Registro exitoso",
      fullname: `${newUser.name} ${newUser.lastname}`,
      userName: `${newUser.username}`,
    };
  }
};

const editUser = async (id, name, lastname, email, password, username) => {
  const response = await apiConfig().get(controllers.users);
  const users = response.data;

  // Verificar si el usuario existe
  const user = users.find((x) => x.id === id);

  if (!user) {
    return {
      esEdicionExitosa: false,
      mensaje: "No se encontró el usuario",
    };
  }

  // Actualizar la información del usuario
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.password = password;
  user.username = username;

  // Actualizar la lista de usuarios en el servidor
  await apiConfig().put(controllers.users, { users });

  return {
    esEdicionExitosa: true,
    mensaje: "Edición exitosa",
    fullname: `${user.name} ${user.lastname}`,
    userName: `${user.username}`,
  };
};

export default {
  login,
  register,
  editUser,
};
