import { motion } from "framer-motion";
import Image from "next/image";

const FloatingProfile = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-45 h-45 lg:w-90 lg:h-90 overflow-hidden rounded-full border-2 border-yellow-400 shadow-xl backdrop-blur-lg bg-blue-400/10"
    >
      <Image
        src="/Meet-Parmar.jpg"
        alt="Meet Parmar"
        width={18000}
        height={18000}
        className="w-full h-full object-cover scale-200"
        quality = {100}
      />
    </motion.div>

  );
};

export default FloatingProfile;
