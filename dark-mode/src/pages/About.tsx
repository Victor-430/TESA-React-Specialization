import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-350 mx-auto px-6 md:px-10 pb-24">
      <div className=" pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.35] font-normal text-white/70">
            <span className="font-semibold text-white">Dark Mode Design</span>{" "}
            is a showcase of beautifully designed and inspiring dark mode
            websites. Dim the lights, lower your screen brightness, and enjoy.
          </p>

          <p className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.35] font-normal text-white/90 mt-8">
            All sites handpicked and curated by{" "}
            <Link
              to="https://www.caicardenas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 transition-all"
            >
              Cai Cardenas
            </Link>
            . Stay up to date with the latest additions on{" "}
            <Link
              to="https://www.threads.com/@darkmode.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 transition-all"
            >
              Threads
            </Link>
            ,{" "}
            <Link
              to="https://www.instagram.com/darkmode.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 transition-all"
            >
              Instagram
            </Link>
            ,{" "}
            <Link
              to="https://bsky.app/profile/darkmodedesign.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 transition-all"
            >
              Bluesky
            </Link>
            , and{" "}
            <Link
              to="https://x.com/darkmode_design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 transition-all"
            >
              X
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
