"use client";

import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";
import CountUp from "@/components/animations/CountUp";

function Story() {
  const paras = [
    "LoanTec Financial Software has been building loan management software for small lending businesses since 1996. For nearly 30 years, we've served single-office and multi-office loan companies across the United States — from signature loans to secured loans to title loans.",
    "Our software was written from a lender's point of view. Every feature exists because a real lender needed it — not because it looked good on a spec sheet. That's the difference between purpose-built software and generic financial tools adapted after the fact.",
    "We've evolved from standalone installs to cloud-based deployment, through every regulatory change and market shift along the way. What hasn't changed is who we build for: small lenders, running real offices.",
  ];
  return (
    <section style={{ background: "#fff" }}>
      <div
        className="lt-wrap lt-split"
        style={{
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: ".85fr 1.15fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <SectionHead title="Our story" />
        <AnimateIn
          from="up"
          stagger={0.15}
          staggerSelector=".story-p"
          style={{ display: "grid", gap: 20 }}
        >
          {paras.map((p, i) => (
            <p
              key={i}
              className="story-p"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.6,
                color: i === 0 ? "var(--text-strong)" : "var(--text-body)",
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section style={{ background: "var(--black)" }}>
      <AnimateIn from="up" distance={30}>
        <div
          className="lt-wrap"
          style={{ padding: "80px 40px", textAlign: "center" }}
        >
          <span
            style={{
              display: "block",
              width: 56,
              height: 4,
              background: "var(--red)",
              margin: "0 auto 24px",
            }}
          />
          <h2
            style={{
              color: "#fff",
              fontSize: 34,
              lineHeight: 1.3,
              margin: 0,
              maxWidth: 860,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We exist to give small lenders software that actually fits how they
            work —{" "}
            <span style={{ color: "var(--red)" }}>
              no bloated enterprise tools, no generic financial platforms.
            </span>{" "}
            Purpose-built, and nothing more than you need.
          </h2>
        </div>
      </AnimateIn>
    </section>
  );
}

function ByTheNumbers() {
  const stats: [string, string][] = [
    ["1996", "Founded"],
    ["30", "Years serving small lenders"],
    ["5", "Integration partners"],
    ["8-7", "Support, Mon–Fri CST"],
  ];
  return (
    <section style={{ background: "var(--gray-50)" }}>
      <div className="lt-wrap" style={{ padding: "72px 40px" }}>
        <SectionHead center title="By the numbers" />
        <AnimateIn
          from="up"
          stagger={0.1}
          staggerSelector=".num-card"
          className="lt-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginTop: 44,
          }}
        >
          {stats.map(([v, l]) => (
            <div
              key={l}
              className="num-card"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "30px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 40,
                  color: "var(--red)",
                }}
              >
                <CountUp value={v} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14.5,
                  color: "var(--text-muted)",
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

const REG_BODIES: [string, string, string][] = [
  ["TCFA", "Texas Consumer Finance Association", "Industry association for Texas consumer lenders — advocacy and standards for the businesses we serve."],
  ["OCCC", "Office of Consumer Credit Commissioner (Texas)", "Texas's regulator for consumer credit. LoanTec's reporting supports OCCC compliance requirements."],
  ["OKDCC", "Oklahoma Department of Consumer Credit", "Oklahoma\u2019s consumer-credit regulator. We track the rules so your office stays compliant."],
  ["TNDFI", "Tennessee Department of Financial Institutions", "Tennessee\u2019s financial regulator overseeing licensed lenders in the state."],
];

function Regulatory() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          title="Regulatory affiliations"
          body="Small lenders answer to state regulators. We build with those rules in mind — and stay close to the bodies that set them."
          maxWidth={620}
        />
        <AnimateIn
          from="up"
          stagger={0.1}
          staggerSelector=".reg-card"
          className="lt-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 18,
            marginTop: 44,
          }}
        >
          {REG_BODIES.map(([abbr, name, desc]) => (
            <div key={abbr} className="reg-card">
              <Card padding={28} style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#fff",
                    background: "var(--black)",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    alignSelf: "flex-start",
                    letterSpacing: ".02em",
                  }}
                >
                  {abbr}
                </div>
                <div>
                  <h4 style={{ margin: "2px 0 6px", fontSize: 17 }}>{name}</h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built by lenders, for lenders"
        sub="Nearly 30 years of loan management software for small lending businesses — and the same focus we started with in 1996."
      />
      <Story />
      <Mission />
      <ByTheNumbers />
      <Regulatory />
      <CTA
        title="See what LoanTec can do for your business."
        sub="Purpose-built for the way small loan offices actually operate."
        button="See features"
        to="/features"
      />
    </>
  );
}
