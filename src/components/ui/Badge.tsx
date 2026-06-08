type BadgeProps = {
  variant?: "neutral" | "red" | "blue" | "success" | "warning" | "solid" | "dark";
  size?: "sm" | "md";
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const palettes: Record<string, { bg: string; fg: string }> = {
  neutral: { bg: "var(--gray-100)", fg: "var(--gray-800)" },
  red: { bg: "var(--danger-bg)", fg: "var(--red)" },
  blue: { bg: "var(--info-bg)", fg: "var(--blue-press)" },
  success: { bg: "var(--success-bg)", fg: "var(--success)" },
  warning: { bg: "var(--warning-bg)", fg: "var(--warning)" },
  solid: { bg: "var(--red)", fg: "var(--white)" },
  dark: { bg: "var(--black)", fg: "var(--white)" },
};

const sizes: Record<string, { fontSize: string; padding: string }> = {
  sm: { fontSize: "11px", padding: "2px 8px" },
  md: { fontSize: "12px", padding: "4px 10px" },
};

export default function Badge({
  variant = "neutral",
  size = "md",
  children,
  style = {},
}: BadgeProps) {
  const p = palettes[variant] || palettes.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        borderRadius: "var(--radius-pill)",
        background: p.bg,
        color: p.fg,
        whiteSpace: "nowrap",
        lineHeight: 1.4,
        ...sizes[size],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
