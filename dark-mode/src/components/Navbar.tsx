import { Link, useLocation } from "react-router-dom";
import { images } from "../data/images";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="h-17.5" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-350 mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-17.5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={images.logo}
                alt="The Dark Mode Design logo, a simple icon of a waning crescent moon."
                className="w-4.5 h-4.5"
              />
              <h1 className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">
                Dark Mode Design
              </h1>
            </Link>

            <div className="flex items-center gap-1">
              <Link
                to="/about"
                className={`px-4 py-2 text-[18px] font-medium rounded-full transition-colors ${
                  location.pathname === "/about"
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                About
              </Link>
              <Link
                to="mailto:hello@darkmodedesign.com?subject=Site%20Submission"
                className="px-4 py-2 text-[18px] font-medium text-white/50 hover:text-white/80 rounded-full transition-colors"
              >
                Submit a site
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

