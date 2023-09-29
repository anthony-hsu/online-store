import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setProducts(data);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "store",
          element: <Store products={products} />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
