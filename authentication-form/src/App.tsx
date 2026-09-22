import { Routes, Route, Navigate } from "react-router";

import GetStartedPage from "@/pages/GetStartedPage";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import WelcomePage from "@/pages/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/get-started" replace />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
