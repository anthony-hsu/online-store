import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../contexts/CartContext";
import { toCurrency } from "../utilities/currency";

function Product(props) {
  //Contexts
  const { productsInCart, setProductsInCart } = useCart();

  const [quantity, setQuantity] = useState(0);

  const { id, title, description, price, image } = props;

  const addToCart = () => {
    const _productsInCart = productsInCart;
    if (_productsInCart[id]) {
      _productsInCart[id] += Number(quantity);
    } else {
      _productsInCart[id] = Number(quantity);
    }
    setProductsInCart(_productsInCart);
  };

  return (
    <Card className="product-card">
      <CardContent>
        <h1>{title}</h1>
        <img className="product-image" src={image} />
        {/* <p>{description}</p> */}
        <h4>{toCurrency(price)}</h4>
        <label>Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <Button onClick={addToCart}>Add To Cart</Button>
      </CardContent>
    </Card>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
};

export default Product;
