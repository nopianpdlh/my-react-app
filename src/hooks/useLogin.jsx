import { useState, useEffect } from "react";
import { getUsername } from "../services/Auth_service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};

export default useLogin;