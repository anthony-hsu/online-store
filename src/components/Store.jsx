import Product from "./Product";

function Store() {
  return (
    <div>
      <h1>Store</h1>
      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Store;
