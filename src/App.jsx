import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import { useEffect } from "react";
import Cart from "./components/Cart";
import { useProducts } from "./contexts/ProductsContext";

function App() {
  // Contexts
  const { products, getProducts } = useProducts();
  
  useEffect(() => {
    getProducts();
  }, []);

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
        {
          path: "cart",
          element: <Cart />,
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
