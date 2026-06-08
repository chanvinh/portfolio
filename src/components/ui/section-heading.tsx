import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <h2 className="text-highlight font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted leading-relaxed">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
