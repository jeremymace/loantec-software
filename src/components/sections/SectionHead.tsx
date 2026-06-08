"use client";

import AnimateIn from "@/components/animations/AnimateIn";

type SectionHeadProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
  light?: boolean;
  maxWidth?: number;
};

export default function SectionHead({
  eyebrow: eb,
  title,
  body,
  center,
  light,
  maxWidth = 680,
}: SectionHeadProps) {
  const titleColor = light ? "#fff" : "var(--text-strong)";
  const bodyColor = light ? "rgba(255,255,255,.72)" : "var(--text-muted)";
  const eyebrowStyle: React.CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: 13.5,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: light ? "rgba(255,255,255,.6)" : "var(--red)",
  };
  const accentBarStyle: React.CSSProperties = {
    display: "block",
    width: 56,
    height: 4,
    background: "var(--red)",
    margin: center ? "0 auto 16px" : "0 0 16px",
  };

  return (
    <AnimateIn from="up" distance={30} duration={0.6}>
      <div
        style={{
          maxWidth,
          margin: center ? "0 auto" : 0,
          textAlign: center ? "center" : "left",
        }}
      >
        {eb ? (
          <div style={eyebrowStyle}>{eb}</div>
        ) : (
          <span style={accentBarStyle} />
        )}
        <h2
          style={{
            fontSize: 40,
            margin: eb ? "14px 0 0" : 0,
            color: titleColor,
            lineHeight: 1.12,
          }}
        >
          {title}
        </h2>
        {body && (
          <p
            style={{
              fontSize: 17.5,
              color: bodyColor,
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            {body}
          </p>
        )}
      </div>
    </AnimateIn>
  );
}
