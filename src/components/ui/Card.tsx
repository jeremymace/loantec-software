"use client";

import { useState } from "react";

type CardProps = {
  hoverable?: boolean;
  accentBar?: boolean;
  padding?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export default function Card({
  hoverable = false,
  accentBar = false,
  padding,
  children,
  style = {},
  className,
}: CardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: padding != null ? padding : 32,
        boxShadow: hover ? "var(--shadow-card-hover)" : "none",
        transition:
          "box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)",
        transform: hover ? "translateY(-2px)" : "none",
        ...style,
      }}
    >
      {accentBar && (
        <span
          style={{
            display: "block",
            width: 48,
            height: 4,
            background: "var(--red)",
            marginBottom: 16,
          }}
        />
      )}
      {children}
    </div>
  );
}
