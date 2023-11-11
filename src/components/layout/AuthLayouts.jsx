import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className={`${
            isDarkMode
              ? "absolute top-2 right-2 bg-blue-600 p-2 text-white rounded-full"
              : "absolute top-2 right-2 bg-slate-900 p-2 text-white rounded-full"
          }`}
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "🌞" : "🌚"}
        </button>
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
