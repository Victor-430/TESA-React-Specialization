import { useState } from "react";
import FeedbackWidget from "./components/FeedbackWidget";
import univacitiLogo from "./assets/univaciti.png";
import "./index.css";

export default function App() {
  const [showWidget, setShowWidget] = useState<boolean>(true);

  return (
    <div className="app">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-container">
          <a href="/" className="navbar-brand" aria-label="Univaciti Home">
            <img src={univacitiLogo} alt="Univaciti logo" className="univaciti" />
          </a>
        </div>
      </nav>

      <main>
        <button type="button" onClick={() => setShowWidget((v) => !v)}>
          {showWidget ? "Hide widget" : "Show widget"}
        </button>

        {showWidget && <FeedbackWidget />}
      </main>
    </div>
  );
}
