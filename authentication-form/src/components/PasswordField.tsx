import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { FormField } from "@/components/FormField";
import type { PasswordFieldProps } from "@/types";

export const PasswordField = ({
  label,
  name,
  placeholder,
  autoComplete,
  required,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleButton = (
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
    </button>
  );

  return (
    <FormField
      label={label}
      name={name}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      endAdornments={toggleButton}
    />
  );
};
