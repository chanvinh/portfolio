import { motion } from "framer-motion";
import type { TechStackItem } from "@/types";
import { Icon } from "@/components/ui/icon";

interface TechStackItemProps {
  item: TechStackItem;
  index: number;
}

export function TechStackItemCard({ item, index }: TechStackItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="flex w-full flex-col items-center gap-2.5 text-center"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5">
        <Icon name={item.icon} className="h-6 w-6 text-primary" />
      </div>
      <span className="text-base font-medium leading-tight text-muted">
        {item.name}
      </span>
    </motion.li>
  );
}
