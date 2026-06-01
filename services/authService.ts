import axios from "axios";

const API = "http://10.237.101.205:3001";

export const authService = {
  userLogin: async (data: {
    email: string;
    password: string;
  }) => {
    console.log("LOGIN REQUEST:", data);

    const res = await axios.post(`${API}/auth/login`, data);

    console.log("LOGIN RESPONSE:", res.data);

    return res.data;
  },

  userRegister: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("REGISTER REQUEST:", data);

    const res = await axios.post(`${API}/auth/register`, data);

    console.log("REGISTER RESPONSE:", res.data);

    return res.data;
  },
};