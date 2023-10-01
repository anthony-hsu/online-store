import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import { toCurrency } from "../utilities/currency";
import { Paper } from "@mui/material";

function Cart() {
  // Contexts
  const { productsInCart } = useCart();
  const { products } = useProducts();

  // States
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(transformCartInfo());
  }, [productsInCart]);

  const transformCartInfo = () => {
    const cartItems = Object.entries(productsInCart);
    const cartData = cartItems.map((cartItem) => {
      const id = cartItem[0];
      const quantity = cartItem[1];
      const product = products.find((element) => element.id == id);
      return [id, quantity, product];
    });
    return cartData;
  };

  const showCartItems = (item) => {
    const id = item[0];
    const quantity = item[1];
    const product = item[2];
    const productSubtotal = quantity * product.price;

    return (
      <div key={id} className="cart-item">
        <div className="cart-item-img-container">
          <img className="cart-item-img" src={product.image} />
        </div>
        <div className="cart-item-info">
        <h3>
          {product.title}
        </h3>
        <div className="cart-item-data">
          <p>Qty: {quantity}</p>
          <h4>{toCurrency(productSubtotal)}</h4>
        </div>
        </div>

      </div>
    );
  };

  return (
    <div className="cart-container">
      <Paper className="cart-items-container" elevation={10}>
        {cartData.map(showCartItems)}
      </Paper>
      <Paper className="cart-summary-container" elevation={10}>
        <h1>
          Total:{" "}
          {toCurrency(
            cartData.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue[1] * currentValue[2].price,
              0
            )
          )}
        </h1>
      </Paper>
    </div>
  );
}

export default Cart;
