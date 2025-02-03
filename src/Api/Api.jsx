import axious from "axios";

const API = axious.create({
  baseURL: "https://test-alchemy-backend.onrender.com",
});

// export const registerUser = (data) => {

//   return API.post("/user/signup", data);
// };

export const loginrUser = (data) => {
  console.log("ffffffffffffff", data);
  return API.post("/user/signin", data);
};
