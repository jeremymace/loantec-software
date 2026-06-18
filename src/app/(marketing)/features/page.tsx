"use client";

import Link from "next/link";
import {
  FileText,
  Receipt,
  BarChart3,
  Users,
  Wallet,
  Calculator,
  ShieldCheck,
  Cloud,
  HardDrive,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";

const ICON_MAP: Record<string, React.ReactNode> = {
  "file-text": <FileText size={26} />,
  receipt: <Receipt size={26} />,
  "bar-chart-3": <BarChart3 size={26} />,
  users: <Users size={26} />,
  wallet: <Wallet size={26} />,
  calculator: <Calculator size={26} />,
  "shield-check": <ShieldCheck size={26} />,
};

const FEATURES_FULL: [string, string, string][] = [
  ["file-text", "Financial transactions", "Full loan-lifecycle processing — from origination and disbursement through every renewal, adjustment, and payoff. Signature, secured, and title loans in one workflow."],
  ["receipt", "Notes & payment processing", "Track every note and process every payment in-house. Apply, reverse, and reconcile without exporting to a third-party tool."],
  ["bar-chart-3", "Reports", "Operational, financial, and compliance reporting on demand — the numbers your office and your regulator both need."],
  ["users", "Customer contacts", "Centralized borrower records: history, documents, and every communication, tied to the account."],
  ["wallet", "Payroll", "Built-in payroll for your lending staff. Run your people and your loans from the same system."],
  ["calculator", "Accounting", "Integrated general ledger and financial management — no third-party accounting bolt-on to maintain."],
  ["shield-check", "Employee activity logs", "Compliance-ready tracking of staff actions. Know who did what, and when, across every account."],
];

function DeploymentOptions() {
  const opts: [React.ReactNode, string, string, string[]][] = [
    [<Cloud key="c" size={32} />, "Cloud-based", "Best for multi-office operations.", ["Centralized data across every location", "Access from anywhere, always current", "No on-site server to maintain", "Automatic updates and backups"]],
    [<HardDrive key="h" size={32} />, "Standalone", "Best for a single-location shop.", ["Runs entirely on your own machine", "No monthly cloud dependency", "Full control of your data on-site", "Fast, local performance"]],
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          center
          title="Cloud-based or standalone"
          body="Deploy the way your operation runs. Same software, same workflows — your choice of where it lives."
        />
        <AnimateIn
          from="up"
          stagger={0.15}
          staggerSelector=".deploy-card"
          className="lt-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 48,
          }}
        >
          {opts.map(([icon, t, who, points]) => (
            <div key={t} className="deploy-card">
              <Card accentBar padding={36}>
                <span style={{ color: "var(--red)" }}>{icon}</span>
                <h3 style={{ fontSize: 26, margin: "16px 0 4px" }}>{t}</h3>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--blue)",
                    fontWeight: 600,
                  }}
                >
                  {who}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "20px 0 0",
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        gap: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 15.5,
                        color: "var(--text-body)",
                      }}
                    >
                      <Check
                        size={18}
                        color="var(--success)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

function FeatureGridDetailed() {
  return (
    <section style={{ background: "var(--gray-50)" }}>
      <div className="lt-wrap" style={{ padding: "80px 40px" }}>
        <SectionHead
          center
          title="Every workflow, one platform"
          body="No bolt-ons, no integrations to babysit. The whole operation lives in LoanTec."
        />
        <AnimateIn
          from="up"
          stagger={0.08}
          staggerSelector=".feat-detail"
          className="lt-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 18,
            marginTop: 48,
          }}
        >
          {FEATURES_FULL.map(([icon, title, body]) => (
            <div key={title} className="feat-detail">
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
                  {ICON_MAP[icon]}
                </span>
                <div>
                  <h4 style={{ margin: "2px 0 6px", fontSize: 20 }}>
                    {title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
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

function IntegrationCallout() {
  const partners = ["REPAY", "Crypton Mobile", "Equifax", "Experian", "TransUnion"];
  return (
    <section style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/bg-integrations.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />
      <div
        className="lt-wrap lt-split"
        style={{
          padding: "72px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <SectionHead
            title="Works with the tools you already use"
            body="Payment processing, mobile, and all three national credit bureaus — connected to the partners lenders actually use."
          />
          <div style={{ marginTop: 26 }}>
            <Link href="/partners">
              <Button
                variant="secondary"
                iconRight={<ArrowRight size={16} />}
              >
                See integration partners
              </Button>
            </Link>
          </div>
        </div>
        <AnimateIn
          from="right"
          stagger={0.08}
          staggerSelector=".partner-tag"
          style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
        >
          {partners.map((n) => (
            <div
              key={n}
              className="partner-tag"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "18px 22px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--text-strong)",
                background: "var(--gray-50)",
              }}
            >
              {n}
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything you need to run your lending operation"
        sub="One platform. Every workflow."
        bgImage="/images/bg-features.png"
      />
      <DeploymentOptions />
      <FeatureGridDetailed />
      <IntegrationCallout />
      <CTA
        title="See it running your office."
        sub="Book a walkthrough and we'll show you LoanTec on your loan types."
        button="Request a demo"
      />
    </>
  );
}
