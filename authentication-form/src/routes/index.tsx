import { createBrowserRouter, Navigate } from "react-router";

import { GetStartedPage } from "@/pages/GetStartedPage";
import { LoginPage } from "@/pages/LoginPage";
import { ForgotPasswordPage } from "@/pages/ForgotPasswordPage";
import { WelcomePage } from "@/pages/WelcomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/get-started" replace />,
  },
  {
    path: "/get-started",
    element: <GetStartedPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
