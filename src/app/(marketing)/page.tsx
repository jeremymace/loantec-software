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
    <section
      ref={ref}
      style={{
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/bg-office.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />
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
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <Image
              src="/images/loantec-screenshot.jpg"
              alt="LoanTec software interface"
              width={960}
              height={640}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
          <div
            style={{
              marginTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Simple front end. Modern back end.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Logo Brand Bar ── */
function LogoBrand() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div
        className="lt-wrap"
        style={{ padding: "36px 40px", textAlign: "center" }}
      >
        <Image
          src="/images/loantec-logo.png"
          alt="LoanTec"
          width={400}
          height={100}
          style={{ height: "auto", width: 200, margin: "0 auto" }}
        />
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginTop: 10,
          }}
        >
          Solid. Powerful. Fast.
        </div>
      </div>
    </section>
  );
}

/* ── Simple Front End / Modern Back End ── */
function DesignPhilosophy() {
  return (
    <section style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--border)" }}>
      <AnimateIn from="up" distance={25}>
        <div
          className="lt-wrap lt-split"
          style={{
            padding: "56px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            maxWidth: 960,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: 28, margin: "0 0 12px", lineHeight: 1.2 }}>
              Simple front end.{" "}
              <span style={{ color: "var(--red)" }}>Modern back end.</span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16.5,
                color: "var(--text-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              The interface is intentionally straightforward — fast to learn,
              easy to train new employees, zero confusion. Behind the scenes,
              LoanTec runs on current infrastructure: TLS 1.2 security, Edge
              browser compatibility, and modern deployment architecture.
              Simplicity is a design choice, not a limitation.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {[
              ["Fast to learn", "New hires are productive in days, not weeks."],
              ["TLS 1.2 security", "Industry-standard encryption on every connection."],
              ["Modern infrastructure", "Current browser support and cloud-ready architecture."],
            ].map(([t, b]) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <Check
                  size={18}
                  color="var(--success)"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 15.5,
                      color: "var(--text-strong)",
                    }}
                  >
                    {t}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
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
    <section style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/bg-dark-office.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />
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
      <LogoBrand />
      <DesignPhilosophy />
      <ValueStrip />
      <FeaturesPreview />
      <Trust />
      <IntegrationsBar />
      <CTA title="Ready to streamline your lending operation?" />
    </>
  );
}
