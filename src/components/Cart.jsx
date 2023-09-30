import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";

function Cart() {
  // Contexts
  const { productsInCart } = useCart();
  const { products } = useProducts();

  const cartItems = Object.entries(productsInCart);

  const showCartItems = (cartItem) => {
    const id = cartItem[0];
    const quantity = cartItem[1];
    const product = products.find((element) => element.id == id);
    return (
      <div key={id}>
        <h3>
          [{quantity}] {product.title}: {quantity * product.price}
        </h3>
      </div>
    );
  };

  return <div>{cartItems.map(showCartItems)}</div>;
}

export default Cart;
