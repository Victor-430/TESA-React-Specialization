import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        // className="nav-logo"
      >
      <img src="/public/Univacit.png" alt="univaciti" className="univaciti" />
      </NavLink>
      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
}
