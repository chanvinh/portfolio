import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mx-auto w-full max-w-sm md:max-w-2xl 2xl:max-w-3xl"
    >
      <motion.img
        src="/hero-illustration.svg"
        alt="Developer workspace illustration"
        className="mx-auto h-80 w-full md:h-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
