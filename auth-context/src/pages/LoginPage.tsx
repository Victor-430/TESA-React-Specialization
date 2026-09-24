import { useState  } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

import { loginValidationSchema } from "../schemas/authSchemas";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      login({
        email: values.email,
      });

      toast.success("Successfully logged in!", {
        description: "Welcome back to your account.",
      });

      navigate("/dashboard", { replace: true });
    },
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-zinc-200 shadow-sm bg-white">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold tracking-tight text-[#010101]">
            Welcome Back
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <Input
              id="email"
              name="email"
              label="Email address"
              type="email"
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
              leftIcon={<Mail className="w-4 h-4" />}
            />

            <Input
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              touched={formik.touched.password}
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-400 hover:text-zinc-600 focus:outline-none cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              }
            />

            <Button
              type="submit"
              className="w-full mt-2 flex items-center justify-center gap-2"
              disabled={formik.isSubmitting}
            >
              <span>Login</span>
              <LogIn className="w-4 h-4" />
            </Button>

            <div className="text-center pt-2">
              <p className="text-xs text-zinc-500">
                Don't have an account?{" "}
                <Link
                  to="/get-started"
                  className="font-semibold text-[#010101] hover:underline"
                >
                  Get started
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
