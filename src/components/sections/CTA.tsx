"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/animations/AnimateIn";

type CTAProps = {
  title?: string;
  sub?: string;
  button?: string;
  to?: string;
  photos?: { src: string; alt: string }[];
};

export default function CTA({
  title = "See LoanTec running your office.",
  sub = "Single office or multi-state — we scale to fit without the enterprise bloat.",
  button = "Request a demo",
  to = "/contact",
  photos,
}: CTAProps) {
  return (
    <section style={{ background: "var(--red)" }}>
      <AnimateIn from="up" distance={30}>
        <div
          className="lt-wrap lt-cta-band"
          style={{
            padding: photos ? "64px 40px 64px" : "64px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}
        >
          {photos && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
                maxWidth: 640,
                width: "100%",
              }}
            >
              {photos.map((p) => (
                <div
                  key={p.src}
                  style={{
                    border: "5px solid #fff",
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    lineHeight: 0,
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 30,
              flexWrap: "wrap",
              width: "100%",
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
        </div>
      </AnimateIn>
    </section>
  );
}
