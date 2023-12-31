import Product from "./Product";
import PropTypes from "prop-types";

function Store(props) {
  const showProducts = (product) => {
    return <Product {...product} key={product.id}/>;
  };

  return (
    <div>
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
