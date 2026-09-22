import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { SiteData } from "../data/sites";
import { images } from "../data/images";

interface SiteCardProps {
  site: SiteData;
  index: number;
}

const SiteCard = ({ site, index }: SiteCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <Link
        to={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="rounded-xl border border-white/30 bg-black p-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={site.image}
              alt={site.name}
              loading="lazy"
              className="w-full  object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex items-center justify-between pt-3 px-1 pb-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                {site.name}
              </span>
              {site.sponsored && (
                <span className="text-sm font-bold  text-yellow-200/30 bg-yellow-300/20 py-1 px-1 rounded-sm">
                  Sponsored
                </span>
              )}
            </div>
            <img
              src={images.arrow}
              alt=""
              className="w-3 h-5 transition-opacity duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SiteCard;

