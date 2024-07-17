import axios from "axios";

const API_URL = "http://localhost:4000/user";

export const getAllUsers = () => {
  return axios.get(API_URL+"/getAllUsers");
};
export const addUser = (user) => {
  return axios.post(API_URL + "/addUser", user);
};
