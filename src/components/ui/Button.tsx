"use client";

import { useState } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "tertiary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style = {},
  onClick,
  className,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes = {
    sm: { padding: "10px 20px", fontSize: "14px" },
    md: { padding: "16px 32px", fontSize: "16px" },
    lg: { padding: "20px 40px", fontSize: "18px" },
  };

  const base: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    border: "2px solid transparent",
    borderRadius: "var(--radius)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition:
      "background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur-fast) var(--ease)",
    transform: active && !disabled ? "translateY(1px)" : "none",
    lineHeight: 1,
    ...sizes[size],
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: hover ? "var(--red-hover)" : "var(--red)",
      color: "var(--white)",
      borderColor: hover ? "var(--red-hover)" : "var(--red)",
    },
    secondary: {
      background: hover ? "var(--red)" : "var(--white)",
      color: hover ? "var(--white)" : "var(--red)",
      borderColor: "var(--red)",
    },
    dark: {
      background: hover ? "#1f1f1f" : "var(--black)",
      color: "var(--white)",
      borderColor: hover ? "#1f1f1f" : "var(--black)",
    },
    tertiary: {
      background: "transparent",
      color: hover ? "var(--blue-hover)" : "var(--blue)",
      borderColor: "transparent",
      textTransform: "none" as const,
      letterSpacing: "normal",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      textDecoration: hover ? "underline" : "none",
      padding: size === "md" ? "8px 4px" : sizes[size].padding,
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
