import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert Your Name Here.."
        name="fullname"
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        placeholder="Example@Gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confrimPassword"
      ></InputForm>

      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
