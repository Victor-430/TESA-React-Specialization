import { motion } from "framer-motion";
import sites from "../data/sites";
import SiteCard from "../components/SiteCard";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-380 mx-auto px-6 md:px-10 pb-24"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10 pt-8">
        {sites.map((site, index) => (
          <SiteCard key={site.id} site={site} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;

