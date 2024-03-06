import axios from "axios";

const getLenguages = () => {
  const options = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "e207ba4c28mshe3aac50e9faa2f4p1668b0jsne1abac797e33",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const detectLenguage = (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "e207ba4c28mshe3aac50e9faa2f4p1668b0jsne1abac797e33",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const translate = (text, target, source) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);
  encodedParams.set("target", target);
  encodedParams.set("source", source);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "e207ba4c28mshe3aac50e9faa2f4p1668b0jsne1abac797e33",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default { getLenguages, detectLenguage, translate };
