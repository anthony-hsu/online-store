import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="navbar">
        <h1 id="navbar-title">Shopping Cart</h1>
        <div className="navlink-container">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="store">
            Store
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
