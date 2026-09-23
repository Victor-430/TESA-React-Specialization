import type React from "react";

export interface GetStartedValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface ForgotPasswordValues {
  email: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  endAdornments?: React.ReactNode;
  inputClassName?: string;
}

export type PasswordFieldProps = Omit<
  FormFieldProps,
  "type" | "endAdornment" | "inputClassName"
>;

export interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export interface LogoProps {
  className?: string;
}

export interface AuthLayoutProps {
  heading: string;
  subtitle: string;
  children: React.ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
  maxWidth?: string;
  backLink?: {
    text: string;
    href: string;
  };
}
