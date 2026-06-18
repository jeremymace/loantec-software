"use client";

import Link from "next/link";
import {
  Building2,
  Monitor,
  Users,
  Check,
  ArrowRight,
  BadgePercent,
  Server,
  GraduationCap,
  Database,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";

function PricingHero() {
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
              title="Straightforward pricing"
              body="No purchase cost, no upfront fees. LoanTec is a monthly license — everything you need to run your lending operation, included from day one."
            />
            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact">
                <Button variant="primary">Get started</Button>
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
                Per office, per month
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 64,
                  color: "var(--text-strong)",
                  lineHeight: 1,
                  marginTop: 12,
                }}
              >
                $260
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  color: "var(--text-muted)",
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                Includes 1 workstation connection, software, initial training,
                all upgrades, and unlimited phone support.
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "16px 0 0",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Monitor size={20} color="var(--blue)" />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "var(--text-strong)",
                    }}
                  >
                    +$20<span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-muted)" }}>/mo</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13.5,
                      color: "var(--text-muted)",
                    }}
                  >
                    per additional concurrent terminal connection
                  </div>
                </div>
              </div>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function PricingExtras() {
  const extras: [React.ReactNode, string, string][] = [
    [
      <BadgePercent key="v" size={24} />,
      "Volume discounts up to 27%",
      "The more offices and workstations you run, the more you save. Discounts scale based on office count and operating system.",
    ],
    [
      <Server key="h" size={24} />,
      "Home Office Management System",
      "Free for multi-office customers. Combines all branches into a single view for auditing, reporting, and oversight. Requires Windows Server with Terminal Services.",
    ],
    [
      <Database key="d" size={24} />,
      "Data conversion",
      "Moving from another program? We offer fee-based data conversion to migrate your existing loan records into LoanTec.",
    ],
    [
      <GraduationCap key="t" size={24} />,
      "3–5 day training course",
      "Hands-on training for new lenders, conducted in a live loan office. Learn the software the way you'll actually use it.",
    ],
  ];

  return (
    <section style={{ background: "var(--gray-50)" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          center
          title="More ways we support your operation"
        />
        <AnimateIn
          from="up"
          stagger={0.1}
          staggerSelector=".extra-card"
          className="lt-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 18,
            marginTop: 44,
          }}
        >
          {extras.map(([icon, title, body]) => (
            <div key={title} className="extra-card">
              <Card hoverable padding={28} style={{ display: "flex", gap: 18 }}>
                <span
                  style={{
                    width: 52,
                    height: 52,
                    flexShrink: 0,
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
                <div>
                  <h4 style={{ margin: "2px 0 6px", fontSize: 18 }}>
                    {title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {body}
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
    "Ongoing software upgrades",
    "Unlimited phone support",
    "Initial training & implementation",
  ];

  return (
    <section style={{ background: "#fff" }}>
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
    [
      "Are there setup or purchase fees?",
      "No. LoanTec is a monthly license with no upfront cost. Your $260/month per office covers everything you need to get running.",
    ],
    [
      "What if I need more workstations?",
      "Each additional concurrent terminal connection is $20/month. Add or remove them anytime as your staff grows.",
    ],
    [
      "What\u2019s included in support?",
      "Unlimited phone support Monday\u2013Friday, 8 AM \u2013 7 PM CST, plus all software upgrades \u2014 included in your monthly license.",
    ],
    [
      "Do you offer volume pricing?",
      "Yes. Volume discounts of up to 27% are available based on the number of offices and your operating system configuration.",
    ],
  ];

  return (
    <section style={{ background: "var(--gray-50)" }}>
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
                background: "#fff",
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
        sub="$260/month per office. Everything included."
        bgImage="/images/bg-monitor-person.jpg"
      />
      <PricingHero />
      <PricingExtras />
      <WhatsIncluded />
      <PricingFaqTeaser />
      <CTA
        title="Ready to get started?"
        sub="Tell us about your operation and we'll get you set up."
        button="Contact us"
      />
    </>
  );
}
