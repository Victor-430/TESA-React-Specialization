import { useFormikContext } from "formik";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

function SubmitButton({ children, className }: SubmitButtonProps) {
  const { isSubmitting, isValid, dirty } = useFormikContext();
  const isDisabled = isSubmitting || !isValid || !dirty;

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Button
        type="submit"
        size="lg"
        disabled={isDisabled}
        className={cn(
          "w-full text-sm sm:text-lg font-medium",
          className
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Please wait...</span>
          </>
        ) : (
          children
        )}
      </Button>
    </motion.div>
  );
}

export { SubmitButton };

