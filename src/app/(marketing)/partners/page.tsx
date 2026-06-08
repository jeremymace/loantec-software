"use client";

import {
  Wallet,
  Smartphone,
  LineChart,
  CreditCard,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";

const ICON_MAP: Record<string, React.ReactNode> = {
  wallet: <Wallet size={26} />,
  smartphone: <Smartphone size={26} />,
  "line-chart": <LineChart size={26} />,
  "credit-card": <CreditCard size={28} />,
};

const PARTNERS: [string, string, string, string][] = [
  ["REPAY", "Payment processing", "wallet", "Capture and apply borrower payments directly inside LoanTec. REPAY handles card and ACH processing without exporting to a separate tool, so payments post against the right account automatically."],
  ["Crypton Mobile", "Mobile integration", "smartphone", "Connect LoanTec to mobile workflows for lenders who need them — extending your operation beyond the front desk."],
  ["Equifax", "Credit reporting", "line-chart", "Pull Equifax credit data inside LoanTec for underwriting decisions — no separate bureau login or manual re-entry."],
  ["Experian", "Credit reporting", "line-chart", "Run Experian credit pulls as part of your origination workflow, with results tied straight to the borrower record."],
  ["TransUnion", "Credit reporting", "line-chart", "Access TransUnion credit reporting from within LoanTec, completing all-three-bureau coverage for your lending decisions."],
];

function PartnerCategories() {
  const cats: [string, string, string][] = [
    ["credit-card", "Payment processing", "REPAY"],
    ["smartphone", "Mobile", "Crypton Mobile"],
    ["line-chart", "Credit bureaus", "Equifax \u00b7 Experian \u00b7 TransUnion"],
  ];

  return (
    <section
      style={{
        background: "var(--gray-50)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <AnimateIn
        from="up"
        stagger={0.1}
        staggerSelector=".cat-item"
        className="lt-wrap lt-cols-3"
        style={{
          padding: "64px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }}
      >
        {cats.map(([icon, label, names]) => (
          <div
            key={label}
            className="cat-item"
            style={{ textAlign: "center", padding: "20px 16px" }}
          >
            <span style={{ color: "var(--red)", display: "inline-flex" }}>
              {ICON_MAP[icon]}
            </span>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 18,
                marginTop: 12,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14.5,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              {names}
            </div>
          </div>
        ))}
      </AnimateIn>
    </section>
  );
}

function PartnerCards() {
  return (
    <section style={{ background: "#fff" }}>
      <AnimateIn
        from="up"
        stagger={0.1}
        staggerSelector=".p-card"
        className="lt-wrap"
        style={{ padding: "80px 40px", display: "grid", gap: 18 }}
      >
        {PARTNERS.map(([name, cat, icon, desc]) => (
          <div key={name} className="p-card">
            <Card
              hoverable
              padding={32}
              className="lt-partner-card"
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: 36,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 26,
                    color: "var(--text-strong)",
                  }}
                >
                  {name}
                </span>
                <Badge variant="blue" size="sm">
                  {cat}
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 18,
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
                  {ICON_MAP[icon]}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </AnimateIn>
    </section>
  );
}

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integration partners"
        title="Built to work with the tools you trust"
        sub="LoanTec integrates with leading payment, credit, and mobile platforms — built in, not bolted on."
      />
      <PartnerCategories />
      <PartnerCards />
      <CTA
        title="Want to see how integrations work in LoanTec?"
        sub="We'll walk you through credit pulls and payment processing live."
        button="Request a demo"
      />
    </>
  );
}
