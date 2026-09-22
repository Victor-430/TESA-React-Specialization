import { useNavigate } from "react-router";
import { Formik, Form } from "formik";
import { toast } from "sonner";

import { AuthLayout } from "@/layouts/AuthLayout";
import { FormField } from "@/components/FormField";
import { SubmitButton } from "@/components/SubmitButton";
import { forgotPasswordSchema } from "@/lib/validations";

interface ForgotPasswordValues {
  email: string;
}

const initialValues: ForgotPasswordValues = {
  email: "",
};

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: ForgotPasswordValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Reset code sent!", {
      description: `We've sent password reset instructions to ${values.email}.`,
    });

    // Navigate back to login after short delay
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <AuthLayout
      heading="Forgot password"
      subtitle="We'll email you a reset code"
      maxWidth="max-w-[400px]"
      backLink={{
        text: "Back to login",
        href: "/login",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        <Form className="mt-8 space-y-6" noValidate>
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="records.manager@example.com"
            autoComplete="email"
            required
          />

          <SubmitButton>Send reset code</SubmitButton>
        </Form>
      </Formik>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;

