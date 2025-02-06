import axious from "axios";

export const API = axious.create({
  baseURL: "https://test-alchemy-backend.onrender.com",
});

export const loginrUser = async (data) => {
  const res = await API.post("/user/signin", data);
  return res.data;
};
export const registerUser = async (data) => {
  const res = await API.post("/user/signup", data);
  return res.data;
};
