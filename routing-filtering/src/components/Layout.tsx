import { Outlet } from "react-router";
import {Navbar} from "./Navbar";

export const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2026 VicShop</p>
      </footer>
    </div>
  );
}
