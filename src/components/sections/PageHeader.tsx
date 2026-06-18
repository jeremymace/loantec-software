"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  bgImage?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  sub,
  dark,
  bgImage,
}: PageHeaderProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(ref.current.querySelector(".ph-eyebrow")!, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })
        .from(
          ref.current.querySelector(".ph-title")!,
          { opacity: 0, y: 30, duration: 0.6 },
          "-=0.3"
        )
        .from(
          ref.current.querySelector(".ph-sub"),
          { opacity: 0, y: 20, duration: 0.5 },
          "-=0.3"
        );
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      style={{
        background: dark ? "var(--black)" : "var(--gray-50)",
        borderBottom: dark ? "none" : "1px solid var(--border)",
        position: bgImage ? "relative" : undefined,
        overflow: bgImage ? "hidden" : undefined,
      }}
    >
      {bgImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            pointerEvents: "none",
          }}
        />
      )}
      <div
        className="lt-wrap"
        style={{ padding: "72px 40px 64px", textAlign: "center" }}
      >
        <div
          className="ph-eyebrow"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 13.5,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: dark ? "rgba(255,255,255,.6)" : "var(--red)",
          }}
        >
          {eyebrow}
        </div>
        <h1
          className="ph-title"
          style={{
            fontSize: 50,
            lineHeight: 1.08,
            margin: "16px auto 0",
            maxWidth: 820,
            color: dark ? "#fff" : "var(--text-strong)",
          }}
        >
          {title}
        </h1>
        {sub && (
          <p
            className="ph-sub"
            style={{
              fontSize: 19,
              color: dark ? "rgba(255,255,255,.75)" : "var(--text-muted)",
              maxWidth: 640,
              margin: "18px auto 0",
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
