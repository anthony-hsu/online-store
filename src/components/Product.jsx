import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

function Product(props) {
  const [quantity, setQuantity] = useState(0);

  const { title, description, price, image } = props;

  return (
    <Card className="product-card">
      <CardContent>
        <h1>{title}</h1>
        <img className="product-image" src={image} />
        {/* <p>{description}</p> */}
        <h4>{price}</h4>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        <Button>Add To Cart</Button>
      </CardContent>
    </Card>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
};

export default Product;
