"use client";

import { Phone, Mail, FileText, ClipboardList } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import AnimateIn from "@/components/animations/AnimateIn";
import Card from "@/components/ui/Card";

type DownloadItem = {
  title: string;
  href: string;
  icon: typeof FileText;
  summary: string;
};

const DOWNLOADS: DownloadItem[] = [
  {
    title: "License Agreement",
    href: "/resources/LoanTecLicenseAgreement.pdf",
    icon: FileText,
    summary:
      "Cancel anytime with 30 days written notice — no long-term commitment. Software is licensed directly to you and all data you enter remains your property. Software is copyrighted and may not be resold or transferred without written permission.",
  },
  {
    title: "Software Support Agreement",
    href: "/resources/LoanTec_SoftwareSupportAgreement.pdf",
    icon: FileText,
    summary:
      "Support available Mon–Fri, 8:00 AM – 6:00 PM Central Time. Covers all LoanTec software issues — most resolved immediately, complex issues may require a callback. Training available to help you get the most out of every tool.",
  },
  {
    title: "Company Information Form",
    href: "/resources/LoanTec_CompanyInformationForm.pdf",
    icon: ClipboardList,
    summary:
      "Fillable form for new customers to provide company details during onboarding.",
  },
];

function Downloads() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="lt-wrap" style={{ padding: "64px 40px" }}>
        <AnimateIn from="up" distance={25}>
          <span
            style={{
              display: "block",
              width: 56,
              height: 4,
              background: "var(--red)",
              marginBottom: 14,
            }}
          />
          <h2 style={{ fontSize: 28, margin: "0 0 32px" }}>Downloads</h2>
        </AnimateIn>
        <AnimateIn
          from="up"
          stagger={0.08}
          staggerSelector=".dl-card"
          className="lt-cols-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {DOWNLOADS.map((d) => {
            const Icon = d.icon;
            return (
              <Card key={d.title} hoverable className="dl-card">
                <Icon size={28} color="var(--blue)" style={{ marginBottom: 12 }} />
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    margin: "0 0 10px",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    margin: "0 0 20px",
                  }}
                >
                  {d.summary}
                </p>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "var(--blue)",
                  }}
                >
                  Download PDF →
                </a>
              </Card>
            );
          })}
        </AnimateIn>
      </div>
    </section>
  );
}

type ResourceEntryData = {
  name: string;
  lines: string[];
  phone?: string;
  email?: string;
};

const RESOURCE_GROUPS: [string, ResourceEntryData[]][] = [
  [
    "Regulatory Offices",
    [
      { name: "OCCC — Office of Consumer Credit Commissioner", lines: ["2601 N. Lamar Blvd.", "Austin, Texas 78705"], phone: "512.936.7600" },
      { name: "Oklahoma Department of Consumer Credit", lines: ["4545 North Lincoln Blvd. Suite 104", "Oklahoma City, Oklahoma 73105"], phone: "405.521.3653" },
      { name: "Tennessee Financial Institutions", lines: ["511 Union Street, Suite 400", "Nashville, TN 37219"], phone: "615.741.2236" },
      { name: "TCFA Headquarters", lines: ["4600 Spicewood Springs Road, Suite 103", "Austin, Texas 78759"], phone: "(800) 258-5316 \u00b7 (512) 346-5820 \u00b7 Fax (512) 343-1530" },
    ],
  ],
];

function ResourceEntry({
  name,
  lines,
  phone,
  email,
}: ResourceEntryData) {
  return (
    <div style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 19,
          color: "var(--text-strong)",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          color: "var(--text-muted)",
          lineHeight: 1.55,
          marginTop: 6,
        }}
      >
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px 22px",
          marginTop: 10,
        }}
      >
        {phone && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-body)",
              fontSize: 15.5,
            }}
          >
            <Phone size={15} color="var(--blue)" />
            <span style={{ color: "var(--text-body)" }}>{phone}</span>
          </span>
        )}
        {email && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-body)",
              fontSize: 15.5,
            }}
          >
            <Mail size={15} color="var(--blue)" />
            <a
              href={`mailto:${email}`}
              style={{ color: "var(--blue)", fontWeight: 600 }}
            >
              {email}
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Resources"
        sub="Downloadable agreements, forms, and the regulatory offices serving the lenders we work with."
        bgImage="/images/bg-government-building.png"
      />
      <Downloads />
      <section style={{ background: "#fff" }}>
        <div
          className="lt-wrap"
          style={{ padding: "64px 40px", maxWidth: 880 }}
        >
          {RESOURCE_GROUPS.map(([group, entries], gi) => (
            <AnimateIn key={group} from="up" distance={25} delay={gi * 0.15}>
              <div style={{ marginTop: gi ? 56 : 0 }}>
                <span
                  style={{
                    display: "block",
                    width: 56,
                    height: 4,
                    background: "var(--red)",
                    marginBottom: 14,
                  }}
                />
                <h2 style={{ fontSize: 28, margin: 0 }}>{group}</h2>
                <div
                  style={{
                    marginTop: 8,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {entries.map((e) => (
                    <ResourceEntry key={e.name} {...e} />
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
      <section style={{ background: "var(--black)" }}>
        <AnimateIn from="up" distance={20}>
          <div
            className="lt-wrap"
            style={{ padding: "56px 40px", textAlign: "center" }}
          >
            <h3 style={{ color: "#fff", fontSize: 26, margin: 0 }}>
              Need help?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16.5,
                color: "rgba(255,255,255,.7)",
                margin: "12px 0 6px",
              }}
            >
              Our support team is available Monday–Friday, 8 AM – 7 PM CST.
            </p>
            <div
              style={{
                display: "flex",
                gap: 26,
                justifyContent: "center",
                marginTop: 18,
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 17,
                color: "#fff",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Phone size={18} color="var(--red)" /> (830) 896-7107
              </span>
              <span
                style={{
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Mail size={18} color="var(--red)" /> info@loantec-software.com
              </span>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
