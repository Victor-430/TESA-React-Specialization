import { Link } from "react-router";
import { motion } from "framer-motion";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export const NotFoundPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-5 text-foreground">
      <section className="mx-auto flex w-full max-w-md flex-col items-center py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <Link to="/" aria-label="Back to home" className="mb-8 block no-underline">
            <Logo />
          </Link>

          <span className="font-heading text-7xl font-bold tracking-tight text-primary">
            404
          </span>

          <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground">
            Page Not Found
          </h1>

          <p className="mt-2 text-base text-muted-foreground">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg" className="rounded-md px-6">
              <Link to="/login">Go to Login</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-md px-6">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

