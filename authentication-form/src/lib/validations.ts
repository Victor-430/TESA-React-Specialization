import * as Yup from "yup";

export const firstNameSchema = Yup.string()
  .trim()
  .min(2, "First name must be at least 2 characters")
  .required("First name is required");

export const lastNameSchema = Yup.string()
  .trim()
  .min(2, "Last name must be at least 2 characters")
  .required("Last name is required");

export const emailSchema = Yup.string()
  .trim()
  .email("Please enter a valid email address")
  .required("Email is required");

export const passwordSchema = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .required("Password is required");

export const getStartedSchema = Yup.object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: Yup.string().required("Password is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: emailSchema,
});

