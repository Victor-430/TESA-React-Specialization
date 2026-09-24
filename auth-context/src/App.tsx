import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "./context";
import { router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}
