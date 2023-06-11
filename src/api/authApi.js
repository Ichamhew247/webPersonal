import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8888",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  return authApi.post("/users/register", input);
};

export const login = (input) => {
  return authApi.post("/users/login", input);
};

export const getMe = (token) => {
  return authApi.get("/users/getMe", addToken(token));
};

export const createProduct = (input) => {
  return authApi.post("/products/", input);
};
export const getProduct = () => {
  return authApi.get("/products/");
};
