import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {type === "login" ? (
          <p className="flex justify-center mt-5 text-sm">
            Don't have an account?{"  "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        ) : (
          <p className="flex justify-center mt-5 text-sm">
            Have an account?{"  "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayouts;
