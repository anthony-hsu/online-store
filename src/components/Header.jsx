import { NavLink, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div>
      <div className="navbar">
        <NavLink className="navbar-title" to="/">
          <h1>Shopping Cart</h1>
        </NavLink>
        <div className="navlink-container">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="store">
            Store
          </NavLink>
        </div>
        <div className="cart-container">
          <NavLink className="cartlink" to="cart">
            <ShoppingCartIcon fontSize="large" />
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
