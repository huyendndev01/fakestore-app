import axios from "./customize-axios";

const getAllProducts = () => {
  return axios.get("/products");
};

const getSingleProducts = (id) => {
  return axios.get(`/products/${id}`);
};
const LoginUser = (username, password) => {
  return axios.post("/auth/login", { username, password });
};

const GetAllUser = () => {
  return axios.get("/users");
};

const GetSingleUser = (id) => {
  return axios.get(`users/${id}`);
};

export {
  getAllProducts,
  getSingleProducts,
  LoginUser,
  GetAllUser,
  GetSingleUser,
};
