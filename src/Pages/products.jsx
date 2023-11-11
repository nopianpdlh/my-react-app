import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button/Index";
import { getProducts } from "../services/product_service";
import { getUsername } from "../services/Auth_service";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TabelCart";
import { DarkMode } from "../context/DarkMode";
// import { data } from "autoprefixer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const { isDarkMode, setDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex w-full justify-end px-10 items-center bg-blue-600 text-white">
        {username}
        <Button onClick={handleLogout} variant="ml-5 bg-black">
          Logout
        </Button>
        <button
          className={`${
            isDarkMode
              ? " top-2  bg-blue-900 p-2 mx-5 text-white rounded-full"
              : " top-2  bg-slate-900 p-2 mx-5 text-white rounded-full"
          }`}
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "🌞" : "🌚"}
        </button>
      </div>
      <div
        className={`flex justify-center py-5 ${
          isDarkMode && "bg-slate-900 text-white"
        }`}
      >
        <div className="w-4/7 flex flex-wrap">
          {" "}
          {products.length > 0 &&
            products.map((item) => (
              <CardProducts key={item.id}>
                <CardProducts.Header images={item.image} id={item.id} />
                <CardProducts.Body title={item.title}>
                  {/* {" "} */}
                  {item.description}
                </CardProducts.Body>
                <CardProducts.Footer price={item.price} id={item.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-3/7">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
