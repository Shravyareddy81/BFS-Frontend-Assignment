import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};