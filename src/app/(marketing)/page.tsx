"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Store,
  History,
  LineChart,
  FileText,
  Receipt,
  BarChart3,
  Users,
  Wallet,
  Calculator,
  Check,
  ArrowRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";
import CountUp from "@/components/animations/CountUp";

gsap.registerPlugin(ScrollTrigger);

/* ── Hero ── */
function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.5 })
        .from(".hero-h1", { opacity: 0, y: 40, duration: 0.7 }, "-=0.3")
        .from(".hero-body", { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
        .from(".hero-btns", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-checks", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2")
        .from(
          ".hero-product",
          { opacity: 0, x: 60, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
    },
    { scope: ref }
  );

  return (
    <section ref={ref} style={{ background: "#fff" }}>
      <div
        className="lt-wrap lt-hero"
        style={{
          padding: "74px 40px 64px",
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="hero-eyebrow"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--red)",
            }}
          >
            Loan management software &middot; since 1996
          </div>
          <h1
            className="hero-h1 lt-hero-h1"
            style={{ fontSize: 54, lineHeight: 1.08, margin: "16px 0 0" }}
          >
            Small loan software, built from a{" "}
            <span style={{ color: "var(--red)" }}>lender&apos;s</span> point of
            view.
          </h1>
          <p
            className="hero-body"
            style={{
              fontSize: 18.5,
              color: "var(--text-muted)",
              maxWidth: 520,
              marginTop: 20,
            }}
          >
            Signature, secured, and title loans — processed, tracked, and
            collected in one solid, powerful, fast platform. Cloud-based for
            multi-office, or standalone for a single shop.
          </p>
          <div
            className="hero-btns"
            style={{ display: "flex", gap: 14, marginTop: 30 }}
          >
            <Link href="/features">
              <Button variant="primary">See features</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Request a demo</Button>
            </Link>
          </div>
          <div
            className="hero-checks"
            style={{
              display: "flex",
              gap: 26,
              marginTop: 34,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: 14.5,
            }}
          >
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <Check size={16} color="var(--success)" /> 30 years in small
              lending
            </span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <Check size={16} color="var(--success)" /> No bloat, no lag
            </span>
          </div>
        </div>
        <div className="hero-product">
          <HeroProduct />
        </div>
      </div>
    </section>
  );
}

function HeroProduct() {
  const tiles: [string, string][] = [
    ["Active loans", "1,284"],
    ["Collected today", "$48,920"],
    ["Past due", "37"],
    ["Outstanding", "$3.41M"],
  ];
  const rows: [string, string, string, string][] = [
    ["Maria Delgado", "Signature", "Current", "var(--success)"],
    ["James Whitfield", "Title", "Past due", "var(--warning)"],
    ["Dana Brooks", "Title", "Current", "var(--success)"],
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 40,
          background: "var(--black)",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 7,
        }}
      >
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <span
            key={c}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: c,
              display: "inline-block",
            }}
          />
        ))}
        <Image
          src="/images/loantec-logo.png"
          alt=""
          width={80}
          height={14}
          style={{
            height: 14,
            width: "auto",
            marginLeft: 12,
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
      <div style={{ padding: 18, background: "var(--gray-50)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {tiles.map(([k, v]) => (
            <div
              key={k}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 11,
                  letterSpacing: ".05em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                {k}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 26,
                  marginTop: 4,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            marginTop: 12,
            overflow: "hidden",
          }}
        >
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 14px",
                borderTop: i ? "1px solid var(--border)" : "none",
                fontFamily: "var(--font-body)",
                fontSize: 13,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  color: "var(--text-strong)",
                  flex: 1,
                }}
              >
                {r[0]}
              </span>
              <span style={{ color: "var(--text-muted)" }}>{r[1]}</span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: ".04em",
                  color: r[3],
                  background: `color-mix(in srgb, ${r[3]} 12%, #fff)`,
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                {r[2]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Value Strip ── */
function ValueStrip() {
  const items: [React.ReactNode, string, string][] = [
    [<Cloud key="c" size={26} />, "Cloud or standalone", "Multi-office in the cloud, or a single-location install."],
    [<Store key="s" size={26} />, "Built for small lenders", "Scaled to your operation — never enterprise bloat."],
    [<History key="h" size={26} />, "30 years of expertise", "Founded 1996. We know small lending."],
    [<LineChart key="l" size={26} />, "Integrated credit bureaus", "Equifax, Experian, and TransUnion built in."],
  ];

  return (
    <section
      style={{
        background: "var(--gray-50)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <AnimateIn
        from="up"
        stagger={0.1}
        staggerSelector=".vs-item"
        className="lt-wrap lt-cols-4"
        style={{
          padding: "40px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 30,
        }}
      >
        {items.map(([icon, t, b]) => (
          <div key={t} className="vs-item" style={{ display: "flex", gap: 14 }}>
            <span
              style={{
                color: "var(--blue)",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {icon}
            </span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--text-strong)",
                }}
              >
                {t}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13.5,
                  color: "var(--text-muted)",
                  marginTop: 3,
                  lineHeight: 1.45,
                }}
              >
                {b}
              </div>
            </div>
          </div>
        ))}
      </AnimateIn>
    </section>
  );
}

/* ── Features Preview ── */
const FEATURES: [React.ReactNode, string, string][] = [
  [<FileText key="ft" size={24} />, "Financial transactions", "Full lifecycle loan processing — origination through payoff."],
  [<Receipt key="r" size={24} />, "Notes & payments", "Track every note, process every payment, no third-party bolt-ons."],
  [<BarChart3 key="b" size={24} />, "Reports", "Operational, financial, and compliance reporting on demand."],
  [<Users key="u" size={24} />, "Customer contacts", "Centralized borrower records and communication history."],
  [<Wallet key="w" size={24} />, "Payroll", "Built-in payroll management for your lending staff."],
  [<Calculator key="ca" size={24} />, "Accounting", "Integrated accounting without third-party software."],
];

function FeaturesPreview() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          center
          title="One platform for the whole operation"
          body="Every feature exists because a real lender needed it. That's the difference between purpose-built software and generic financial tools."
        />
        <AnimateIn
          from="up"
          stagger={0.08}
          staggerSelector=".feat-card"
          className="lt-cols-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
            marginTop: 48,
          }}
        >
          {FEATURES.map(([icon, title, body]) => (
            <div key={title} className="feat-card">
              <Card hoverable>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius)",
                    background: "var(--info-bg)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </span>
                <h4 style={{ margin: "16px 0 6px", fontSize: 19 }}>{title}</h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    color: "var(--text-muted)",
                  }}
                >
                  {body}
                </p>
              </Card>
            </div>
          ))}
        </AnimateIn>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/features">
            <Button
              variant="secondary"
              iconRight={<ArrowRight size={16} />}
            >
              See all features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Trust (dark band) ── */
function Trust() {
  const stats: [string, string][] = [
    ["1996", "Serving lenders since"],
    ["4", "State regulators we work under"],
    ["5", "Integration partners"],
    ["1 & multi", "Office deployments"],
  ];

  return (
    <section style={{ background: "var(--black)" }}>
      <div
        className="lt-wrap"
        style={{ padding: "72px 40px", textAlign: "center" }}
      >
        <AnimateIn from="up" distance={30}>
          <span
            style={{
              display: "block",
              width: 56,
              height: 4,
              background: "var(--red)",
              margin: "0 auto 22px",
            }}
          />
          <h2
            style={{
              color: "#fff",
              fontSize: 34,
              margin: 0,
              maxWidth: 760,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.2,
            }}
          >
            Trusted by small lenders across the country — single-office shops to
            multi-state operations.
          </h2>
        </AnimateIn>
        <AnimateIn
          from="up"
          stagger={0.12}
          staggerSelector=".stat-item"
          className="lt-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginTop: 50,
          }}
        >
          {stats.map(([v, l]) => (
            <div key={l} className="stat-item">
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 38,
                  color: "var(--red)",
                }}
              >
                <CountUp value={v} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14.5,
                  color: "rgba(255,255,255,.66)",
                  marginTop: 6,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

/* ── Integrations Bar ── */
function IntegrationsBar() {
  const partners = ["REPAY", "Crypton Mobile", "Equifax", "Experian", "TransUnion"];
  return (
    <section style={{ background: "var(--gray-100)" }}>
      <AnimateIn from="up" distance={20}>
        <div
          className="lt-wrap"
          style={{ padding: "48px 40px", textAlign: "center" }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Works with the tools you already use
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: 24,
              rowGap: 16,
            }}
          >
            {partners.map((n, i) => (
              <div key={n} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <span
                    style={{
                      width: 1,
                      height: 22,
                      background: "var(--warm-gray)",
                      margin: "0 28px",
                      opacity: 0.5,
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--text-strong)",
                  }}
                >
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

/* ── Home Page ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <FeaturesPreview />
      <Trust />
      <IntegrationsBar />
      <CTA title="Ready to streamline your lending operation?" />
    </>
  );
}
