import { Link } from "react-router";
import { motion } from "framer-motion";

import { Logo } from "@/components/Logo";
import type { AuthLayoutProps } from "@/types";

export const AuthLayout = ({
  heading,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
  maxWidth = "max-w-[80%]",
  backLink,
}: AuthLayoutProps) => {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-5 text-foreground">
      <section className="mx-auto flex w-full max-w-xl flex-col items-center py-12">
        <Link
          to="/"
          aria-label="Back to home"
          className="mb-10 w-fit no-underline"
        >
          <Logo />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`mx-auto flex w-full flex-col ${maxWidth}`}
        >
          {backLink && (
            <Link
              to={backLink.href}
              className="mb-6 w-fit text-sm font-medium text-[#717171] no-underline transition hover:text-black"
            >
              ← {backLink.text}
            </Link>
          )}

          <div className="text-center">
            <h1 className="font-heading text-[40px] leading-tight font-medium tracking-tight text-foreground">
              {heading}
            </h1>
            <p className="mt-1 text-xl leading-7 font-medium text-foreground">
              {subtitle}
            </p>
          </div>

          {children}

          {footerText && footerLinkHref && footerLinkText && (
            <p className="mt-3 text-center text-sm leading-6 text-foreground">
              {footerText}{" "}
              <Link
                to={footerLinkHref}
                className="font-normal text-foreground no-underline transition hover:text-primary"
              >
                {footerLinkText}
              </Link>
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
};
