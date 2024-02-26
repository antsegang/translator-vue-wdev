const getItem = (key) => {
  return localStorage.getItem(key);
};

const setItem = (key, value) => {
  return localStorage.setItem(key, value);
};

const removeItem = (key) => {
  return localStorage.removeItem(key);
};

export default { getItem, setItem, removeItem };
