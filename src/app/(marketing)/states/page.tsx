"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import AnimateIn from "@/components/animations/AnimateIn";

const STATES: [string, string, string][] = [
  ["Texas", "OCCC — Office of Consumer Credit Commissioner", "TCFA member. LoanTec reporting supports OCCC requirements for Texas consumer lenders."],
  ["Oklahoma", "OKDCC — Oklahoma Department of Consumer Credit", "Compliance features and reporting aligned to Oklahoma consumer-credit rules."],
  ["Tennessee", "TNDFI — Tennessee Department of Financial Institutions", "Support for lenders licensed under Tennessee\u2019s financial regulator."],
];

export default function StatesPage() {
  const [active, setActive] = useState("Texas");
  const current = STATES.find((s) => s[0] === active)!;

  return (
    <>
      <PageHeader
        eyebrow="Your state"
        title="Compliance built in"
        sub="LoanTec supports lenders operating under state-specific regulations. We track the rules so your office stays compliant."
        bgImage="/images/bg-map.png"
      />
      <section style={{ background: "#fff" }}>
        <div
          className="lt-wrap lt-split"
          style={{
            padding: "72px 40px",
            display: "grid",
            gridTemplateColumns: ".5fr 1.5fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <AnimateIn from="left" distance={20}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 14,
                }}
              >
                Select your state
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                {STATES.map(([name]) => (
                  <button
                    key={name}
                    onClick={() => setActive(name)}
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      borderRadius: "var(--radius)",
                      cursor: "pointer",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: 16,
                      border: `1px solid ${active === name ? "var(--red)" : "var(--border)"}`,
                      background: active === name ? "var(--red)" : "#fff",
                      color: active === name ? "#fff" : "var(--text-body)",
                      transition:
                        "background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease)",
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" distance={30}>
            <Card accentBar padding={40}>
              <h3 style={{ fontSize: 28, margin: 0 }}>{current[0]}</h3>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--blue)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Landmark size={22} />
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
                    Regulatory body
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15.5,
                      color: "var(--text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {current[1]}
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--blue)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <ShieldCheck size={22} />
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
                    What LoanTec supports
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15.5,
                      color: "var(--text-muted)",
                      marginTop: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {current[2]}
                  </div>
                </div>
              </div>
            </Card>
          </AnimateIn>
        </div>
      </section>
      <section
        style={{
          background: "var(--gray-50)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <AnimateIn from="up" distance={20}>
          <div
            className="lt-wrap"
            style={{ padding: "56px 40px", textAlign: "center" }}
          >
            <h3 style={{ fontSize: 24, margin: 0 }}>
              Operating in a state not listed?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16.5,
                color: "var(--text-muted)",
                margin: "12px auto 24px",
                maxWidth: 560,
              }}
            >
              We&apos;ve tracked regulatory change in small lending since 1996 —
              we likely support your state. Let&apos;s confirm.
            </p>
            <Link href="/contact">
              <Button variant="primary">Contact us</Button>
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
