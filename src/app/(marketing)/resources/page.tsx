"use client";

import { Phone, Mail } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import AnimateIn from "@/components/animations/AnimateIn";

type ResourceEntryData = {
  name: string;
  lines: string[];
  phone?: string;
  email?: string;
};

const RESOURCE_GROUPS: [string, ResourceEntryData[]][] = [
  [
    "Printing and Sales Aids",
    [
      { name: "Burrell Printing", lines: ["901 Hwy. 685", "Pflugerville, Texas 78660"], phone: "800.252.9154", email: "info@BurrellPrinting.com" },
      { name: "Technology Printing", lines: ["1262 Viceroy Drive", "Dallas, Texas 75247"], phone: "800.777.9091", email: "j.boling@technologyprinting.com" },
    ],
  ],
  [
    "Other",
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
        sub="Printing, sales aids, and the regulatory offices serving the lenders we work with."
      />
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
