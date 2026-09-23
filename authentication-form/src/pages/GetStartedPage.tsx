import { useNavigate } from "react-router";
import { Formik, Form } from "formik";
import { toast } from "sonner";

import { AuthLayout } from "@/layouts/AuthLayout";
import { FormField } from "@/components/FormField";
import { SubmitButton } from "@/components/SubmitButton";
import { getStartedSchema } from "@/lib/validations";
import type { GetStartedValues } from "@/types";

const initialValues: GetStartedValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const GetStartedPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: GetStartedValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Account created successfully!", {
      description: `Welcome, ${values.firstName}! Please sign in to continue.`,
    });

    navigate("/login");
  };

  return (
    <AuthLayout
      heading="Get Started"
      subtitle="Create your secure EDMS account"
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={getStartedSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        <Form className="mt-8 space-y-6" noValidate>
          <FormField
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            autoComplete="given-name"
            required
          />

          <FormField
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            autoComplete="family-name"
            required
          />

          <FormField
            label="Work email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />

          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
          />

          <SubmitButton>Continue</SubmitButton>
        </Form>
      </Formik>
    </AuthLayout>
  );
};
