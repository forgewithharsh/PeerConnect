import React, { createContext, useContext, useState } from "react";
import axios from "axios";

function AuthContent() {
  return <div></div>;
}

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "localhost:8000/api/v1/users",
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const [userData, setUserData] = useState(authContext);

  const handleRegister = async(name,username, password) => {
    try{
        let request = await client.post("")
    } catch{

    }
  }

  const router = useNavigate();

  const data = {
    userData, setUserData
  }
};
