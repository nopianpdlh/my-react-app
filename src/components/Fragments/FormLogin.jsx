import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";
import { useEffect, useRef, useState } from "react";
import { Login } from "../../services/Auth_service";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const refUsername = useRef(null);

  useEffect(() => {
    refUsername.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Insert Your Name Here.."
        name="username"
        ref={refUsername}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>

      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-700 text-center">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
