import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-black",
    secondary:
      "border border-gray-300 bg-white text-black hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
