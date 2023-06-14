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
  const note = authApi.post("/users/register", input);
  console.log(note);
  return note;
  // return authApi.post("/users/register", input);
};

export const login = (input) => {
  return authApi.post("/users/login", input);
};

export const getMe = (token) => {
  return authApi.get("/users/getMe", addToken(token));
};

export const createProduct = (input) => {
  return authApi.post("/products/createProduct ", input);
};
export const getProduct = () => {
  return authApi.get("/products/");
};
export const getProductById = (id) => {
  return authApi.get(`/products/${id}`);
};

export const updateProduct = (id, input) => {
  return authApi.patch(`/products/${id}`, input);
};
export const deleteProductById = (id) => {
  return authApi.delete(`/products/${id}`);
};
export const searchProduct = (input) => {
  return authApi.post("/products/search", input);
};
