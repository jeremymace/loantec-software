"use client";

import Link from "next/link";
import AnimateIn from "@/components/animations/AnimateIn";

type CTAProps = {
  title?: string;
  sub?: string;
  button?: string;
  to?: string;
};

export default function CTA({
  title = "See LoanTec running your office.",
  sub = "Single office or multi-state — we scale to fit without the enterprise bloat.",
  button = "Request a demo",
  to = "/contact",
}: CTAProps) {
  return (
    <section style={{ background: "var(--red)" }}>
      <AnimateIn from="up" distance={30}>
        <div
          className="lt-wrap lt-cta-band"
          style={{
            padding: "64px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                color: "#fff",
                fontSize: 36,
                margin: 0,
                maxWidth: 640,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.9)",
                fontSize: 17,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              {sub}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link
              href={to}
              style={{
                background: "#fff",
                color: "var(--red)",
                border: "none",
                borderRadius: "var(--radius)",
                padding: "16px 32px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                fontSize: 16,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition:
                  "background var(--dur) var(--ease), transform var(--dur-fast) var(--ease)",
              }}
            >
              {button}
            </Link>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
