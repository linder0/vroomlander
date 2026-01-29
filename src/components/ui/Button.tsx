import Link from "next/link";
import type { ButtonVariant, ButtonSize } from "@/types";

// =============================================================================
// Button Component - Reusable button with variants
// =============================================================================

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isExternal?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-white text-black hover:bg-gray-200",
  outline:
    "border-2 border-black text-black hover:bg-black hover:text-white bg-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  isExternal = false,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "font-medium transition-colors text-center inline-block";
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
}
