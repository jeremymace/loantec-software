"use client";

import Link from "next/link";
import {
  Building2,
  Cloud,
  SlidersHorizontal,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";

function PricingExplainer() {
  const factors: [React.ReactNode, string, string][] = [
    [<Building2 key="b" size={24} />, "Office count", "Single-office shop or multiple locations across states."],
    [<Cloud key="c" size={24} />, "Deployment type", "Cloud-based for multi-office, or a standalone install."],
    [<SlidersHorizontal key="s" size={24} />, "Features you use", "Payroll, accounting, and reporting scaled to your operation."],
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <div
          className="lt-split"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <SectionHead
              title="Pricing that fits your operation"
              body="LoanTec is quote-based — because a single-office signature lender and a multi-state title operation don't need the same thing. We scale to fit, without charging you for enterprise features you'll never use."
            />
            <div
              style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <Link href="/contact">
                <Button variant="primary">Get your custom quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="tertiary">Call (830) 896-7107</Button>
              </Link>
            </div>
          </div>
          <AnimateIn from="right" distance={40}>
            <Card accentBar padding={36}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                What your quote depends on
              </div>
              <div style={{ display: "grid", gap: 20, marginTop: 22 }}>
                {factors.map(([icon, t, b]) => (
                  <div key={t} style={{ display: "flex", gap: 16 }}>
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
                          fontSize: 16.5,
                        }}
                      >
                        {t}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14.5,
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
              </div>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function WhatsIncluded() {
  const included = [
    "Full loan lifecycle processing",
    "Notes & payment processing",
    "Operational & compliance reports",
    "Centralized borrower contacts",
    "Built-in payroll",
    "Integrated accounting",
    "Employee activity logs",
    "Credit bureau integrations",
    "REPAY payment processing",
    "Ongoing software updates",
    "Phone & email support",
    "Implementation assistance",
  ];

  return (
    <section style={{ background: "var(--gray-50)" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          center
          title="What comes standard"
          body="Every LoanTec deployment includes the whole platform. No feature-gating, no surprise add-ons."
        />
        <AnimateIn
          from="up"
          stagger={0.05}
          staggerSelector=".inc-item"
          className="lt-cols-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 40,
            rowGap: 16,
            marginTop: 44,
            maxWidth: 940,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {included.map((item) => (
            <div
              key={item}
              className="inc-item"
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--text-body)",
                borderBottom: "1px solid var(--border)",
                paddingBottom: 14,
              }}
            >
              <Check
                size={18}
                color="var(--success)"
                style={{ flexShrink: 0 }}
              />{" "}
              {item}
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

function PricingFaqTeaser() {
  const qs: [string, string][] = [
    ["How is pricing structured?", "Pricing is quote-based, set by your office count, deployment type, and the features you use — so you only pay for what fits your operation."],
    ["Are there setup fees?", "Implementation assistance is part of getting you running. We\u2019ll walk you through the specifics when we scope your quote."],
    ["What\u2019s included in support?", "Phone and email support Monday–Friday, 8 AM – 7 PM CST, plus ongoing software updates — standard with every deployment."],
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead center title="Pricing questions, answered" />
        <AnimateIn
          from="up"
          stagger={0.1}
          staggerSelector=".faq-item"
          style={{
            maxWidth: 820,
            margin: "40px auto 0",
            display: "grid",
            gap: 14,
          }}
        >
          {qs.map(([q, a]) => (
            <div
              key={q}
              className="faq-item"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "22px 26px",
                background: "var(--gray-50)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--text-strong)",
                }}
              >
                {q}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  color: "var(--text-muted)",
                  margin: "8px 0 0",
                  lineHeight: 1.55,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </AnimateIn>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/faqs">
            <Button variant="tertiary" iconRight={<ArrowRight size={16} />}>
              See all FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        sub="Scaled for single-office and multi-office operations."
      />
      <PricingExplainer />
      <WhatsIncluded />
      <PricingFaqTeaser />
      <CTA
        title="Get your custom quote."
        sub="Tell us about your operation and we'll scope a quote that fits."
        button="Contact us"
      />
    </>
  );
}
