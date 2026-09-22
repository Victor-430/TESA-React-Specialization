import { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FooterContent } from "./FooterContent";



const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAbout) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a]/80 backdrop-blur-md border-t border-white/5">
        <FooterContent />
      </footer>
    );
  }

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a]/80 backdrop-blur-md border-t border-white/5"
        >
          <FooterContent />
        </motion.footer>
      )}
    </AnimatePresence>
  );
};

export default Footer;
