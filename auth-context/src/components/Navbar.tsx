import { Link, useMatch } from "react-router-dom";
import { Button } from "./ui/Button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../context";

export function Navbar() {
  const routeChecker = useMatch("/login");

  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 h-16 flex justify-end">
        <nav className="flex items-center gap-3 text-lg">
          {isAuthenticated && user ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-zinc-700 hover:text-red-600 hover:border-red-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              {routeChecker ? (
                <Link to="/get-started">
                  <Button variant="primary" size="md">
                    Get Started
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="md">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
