import { useState } from "react";
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
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

import { getStartedValidationSchema } from "../schemas/authSchemas";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function GetStartedPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: getStartedValidationSchema,
    onSubmit: (values) => {
      login({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });

      toast.success(`Welcome aboard, ${values.firstName}!`, {
        description: "Your account has been created successfully.",
      });

      navigate("/dashboard");
    },
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-zinc-200 shadow-sm bg-white">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold tracking-tight text-[#010101]">
            Create an Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="firstName"
                name="firstName"
                label="First name"
                type="text"
                placeholder="John"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
                leftIcon={<User className="w-4 h-4" />}
              />

              <Input
                id="lastName"
                name="lastName"
                label="Last name"
                type="text"
                placeholder="Doe"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
                leftIcon={<User className="w-4 h-4" />}
              />
            </div>

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
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="text-center pt-2">
              <p className="text-xs text-zinc-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#010101] hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
