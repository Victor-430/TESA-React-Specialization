import { Link } from "react-router";
import { motion } from "framer-motion";

import { Logo } from "@/components/Logo";

function WelcomePage() {
  return (
    <div className="relative grid min-h-screen place-items-center bg-white px-5 text-foreground">
      <Link
        to="/login"
        className="absolute top-12 left-10 text-sm font-medium text-primary no-underline transition hover:text-primary/80"
      >
        ← Back to login
      </Link>

      <section className="mx-auto flex w-full max-w-xl flex-col items-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Logo />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-6 font-heading text-[48px] leading-tight font-medium tracking-tight text-foreground"
          >
            Welcome!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-2 text-xl leading-7 text-muted-foreground"
          >
            You have successfully signed in to your workspace.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default WelcomePage;
