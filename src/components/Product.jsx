import {
  Button,
  Card,
  IconButton,
  Input,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../contexts/CartContext";
import { toCurrency } from "../utilities/currency";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Product(props) {
  //Contexts
  const { productsInCart, setProductsInCart } = useCart();

  const [quantity, setQuantity] = useState(0);

  const { id, title, price, image } = props;

  const addToCart = () => {
    const _productsInCart = productsInCart;
    if (_productsInCart[id]) {
      _productsInCart[id] += Number(quantity);
    } else {
      _productsInCart[id] = Number(quantity);
    }
    setProductsInCart(_productsInCart);
  };

  const incrementQuantity = () => {
    setQuantity(Number(quantity) + 1);
  };

  const decrementQuantity = () => {
    setQuantity(Number(quantity) - 1);
  };

  return (
    <Card className="product-card" raised>
      <img src={image} className="product-image" />
      <div className="product-card-content">
        <h3 className="product-title">{title}</h3>
        <div className="product-transactions">
          <h1 className="product-price">{toCurrency(price)}</h1>
          <div className="product-add-cart">
            <div>
              <IconButton onClick={incrementQuantity}>
                <AddIcon style={{ color: "green" }} />
              </IconButton>
              <Input
                className="input-quantity"
                type="number"
                name="quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <IconButton onClick={decrementQuantity}>
                <RemoveIcon style={{ color: "red" }} />
              </IconButton>
            </div>
            <Button onClick={addToCart}>Add To Cart</Button>
          </div>
        </div>
      </div>
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
