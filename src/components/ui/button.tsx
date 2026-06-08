import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-base",
};

export function Button({
  size = "md",
  children,
  className = "",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-primary font-medium text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
