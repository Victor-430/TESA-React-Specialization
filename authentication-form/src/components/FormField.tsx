import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  endAdornment?: React.ReactNode;
  inputClassName?: string;
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
  endAdornment,
  inputClassName,
}: FormFieldProps) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && !!meta.error;

  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={name}
        className="font-normal  text-foreground"
      >
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      <div className="w-full">
        <div className="relative">
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={hasError}
            className={cn(
              "px-4 text-black placeholder:text-muted-foreground",
              endAdornment && "pr-11",
              inputClassName
            )}
          />
          {endAdornment}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-destructive"
          >
            {meta.error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export { FormField };
export type { FormFieldProps };

