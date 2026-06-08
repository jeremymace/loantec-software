"use client";

import { useState, useRef } from "react";
import {
  Rocket,
  LayoutGrid,
  Tag,
  Plug,
  ShieldCheck,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageHeader from "@/components/sections/PageHeader";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/animations/AnimateIn";

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket size={22} />,
  "layout-grid": <LayoutGrid size={22} />,
  tag: <Tag size={22} />,
  plug: <Plug size={22} />,
  "shield-check": <ShieldCheck size={22} />,
  "life-buoy": <LifeBuoy size={22} />,
};

const FAQ_GROUPS: [string, string, [string, string][]][] = [
  ["Getting started", "rocket", [
    ["How do I set up LoanTec?", "We help you get running with implementation assistance as part of onboarding — from install or cloud provisioning through configuring your loan types and importing your existing accounts."],
    ["How long does implementation take?", "It depends on your office count and how much existing data you\u2019re bringing over. We\u2019ll give you a clear timeline when we scope your setup."],
    ["Do you offer training?", "Yes. We walk your staff through the workflows they\u2019ll use day to day, and our support team is available Monday–Friday once you\u2019re live."],
  ]],
  ["Features & functionality", "layout-grid", [
    ["What loan types does LoanTec support?", "Signature, secured, and title loans — the core products small lenders run. Every workflow is built around how these loans actually get originated, serviced, and collected."],
    ["Can I run reports for compliance?", "Yes. LoanTec produces operational, financial, and compliance reporting on demand — the numbers your office and your state regulator both need."],
    ["Cloud or standalone — which should I choose?", "Cloud-based suits multi-office operations that need centralized, always-current data. Standalone suits a single-location shop that wants everything running locally. Same software either way."],
  ]],
  ["Pricing & billing", "tag", [
    ["How is pricing structured?", "Pricing is quote-based — set by your office count, deployment type, and the features you use. You only pay for what fits your operation."],
    ["Are there setup fees?", "Implementation assistance is part of getting you running. We\u2019ll cover the specifics when we scope your quote."],
    ["What\u2019s included in support?", "Phone and email support Monday–Friday, 8 AM – 7 PM CST, plus ongoing software updates — standard with every deployment."],
  ]],
  ["Integrations", "plug", [
    ["Which credit bureaus integrate?", "All three national bureaus — Equifax, Experian, and TransUnion — are built in, so credit pulls happen inside LoanTec."],
    ["How does the REPAY integration work?", "REPAY handles payment processing directly within your LoanTec workflow, so payments are captured and applied without exporting to a separate tool."],
    ["What about Crypton Mobile?", "Crypton Mobile connects LoanTec to mobile workflows for lenders who need them. Ask us how it fits your operation."],
  ]],
  ["Compliance & regulation", "shield-check", [
    ["Which states is LoanTec compliant in?", "We work under multiple state regulators, including Texas (OCCC), Oklahoma (OKDCC), and Tennessee (TNDFI). Operating somewhere else? Contact us — we likely support it."],
    ["How do you handle regulatory updates?", "We\u2019ve tracked every regulatory change in small lending since 1996. When rules shift, we update the software so your reporting stays compliant."],
  ]],
  ["Support", "life-buoy", [
    ["What are your support hours?", "Monday–Friday, 8:00 AM – 7:00 PM CST."],
    ["How do I reach support?", "Call (830) 896-7107 or email info@loantec-software.com. A real person who knows the software will help you."],
  ]],
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;
      if (open) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [open], scope: contentRef }
  );

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 0",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 18,
            color: "var(--text-strong)",
            flex: 1,
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: open ? "var(--red)" : "var(--text-muted)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.3s var(--ease)",
            flexShrink: 0,
          }}
        >
          <ChevronDown size={22} />
        </span>
      </button>
      <div ref={contentRef} style={{ overflow: "hidden", height: 0 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--text-muted)",
            margin: "0 0 22px",
            maxWidth: 760,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

function FaqCategory({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: [string, string][];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <AnimateIn from="up" distance={25}>
      <div
        className="lt-faq-layout"
        style={{
          display: "grid",
          gridTemplateColumns: ".6fr 1.4fr",
          gap: 40,
          alignItems: "start",
        }}
      >
        <div
          className="lt-faq-side"
          style={{
            position: "sticky",
            top: 100,
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: "var(--radius)",
              background: "var(--info-bg)",
              color: "var(--blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {ICON_MAP[icon]}
          </span>
          <h3 style={{ fontSize: 22, margin: 0 }}>{title}</h3>
        </div>
        <div>
          {items.map(([q, a], i) => (
            <FaqItem
              key={q}
              q={q}
              a={a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently asked questions"
        sub="Straight answers about setup, features, pricing, integrations, and support."
      />
      <section style={{ background: "#fff" }}>
        <div
          className="lt-wrap"
          style={{ padding: "72px 40px", display: "grid", gap: 56 }}
        >
          {FAQ_GROUPS.map(([title, icon, items]) => (
            <FaqCategory key={title} title={title} icon={icon} items={items} />
          ))}
        </div>
      </section>
      <CTA
        title="Still have questions?"
        sub="Talk to someone who knows the software — not a call center."
        button="Contact us"
      />
    </>
  );
}
