import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border border-border bg-surface p-6 transition-shadow duration-200 ${
        hover ? "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
