import { Link } from "react-router-dom";


export const FooterContent = () => (
  <div className="max-w-350 mx-auto px-6 md:px-10">
    <div className="flex items-center justify-between h-16">
      <div>
        <Link
          to="https://www.mobbin.com/?via=darkmodedesign"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/50 hover:text-white/70 transition-colors"
        >
          Mobbin{" "}
          <span className="text-white/25">
            The world's largest mobile & web design reference library
          </span>
        </Link>
      </div>
      <div>
        <p className="text-sm text-white/25">
          All screenshots © their respective owners
        </p>
      </div>
    </div>
  </div>
);