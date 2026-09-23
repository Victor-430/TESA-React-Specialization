import { Link, useNavigate } from "react-router";
import { Formik, Form } from "formik";
import { toast } from "sonner";

import { AuthLayout } from "@/layouts/AuthLayout";
import { FormField } from "@/components/FormField";
import { PasswordField } from "@/components/PasswordField";
import { SubmitButton } from "@/components/SubmitButton";
import { loginSchema } from "@/lib/validations";
import type { LoginValues } from "@/types";

const initialValues: LoginValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Signed in successfully!");

    navigate("/welcome");
  };

  return (
    <AuthLayout
      heading="Welcome Back"
      subtitle="Sign in to your workspace"
      footerText="Don't have an account?"
      footerLinkText="Get Started"
      footerLinkHref="/get-started"
      maxWidth="max-w-[80%]"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        <Form className="mt-8 space-y-6" noValidate>
          <div> </div>
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            autoComplete="email"
            required
          />

          <div className="space-y-2">
            <PasswordField
              label="Password"
              name="password"
              placeholder="******"
              autoComplete="current-password"
              required
            />
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-[16px] leading-6 text-foreground no-underline transition hover:text-primary"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <SubmitButton>Sign in</SubmitButton>
        </Form>
      </Formik>
    </AuthLayout>
  );
};
