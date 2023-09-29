import { useEffect } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function Store(props) {
  useEffect(() => {
    console.log(props.products);
  }, []);

  const showProducts = (product) => {
    return <Product {...product} />;
  };

  return (
    <div>
      <h1>Store</h1>
      <div className="products-container">
        {props.products.map(showProducts)}
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.array,
};

export default Store;
