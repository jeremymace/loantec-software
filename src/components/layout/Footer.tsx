"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AnimateIn from "@/components/animations/AnimateIn";
import Button from "@/components/ui/Button";

const COLS: [string, [string, string][]][] = [
  [
    "Product",
    [
      ["Features", "/features"],
      ["Pricing", "/pricing"],
      ["Integrations", "/partners"],
      ["Your State", "/states"],
    ],
  ],
  [
    "Company",
    [
      ["About us", "/about"],
      ["Resources", "/resources"],
      ["Contact", "/contact"],
      ["FAQs", "/faqs"],
    ],
  ],
];

const REG = [
  "TCFA — Texas Consumer Finance Association",
  "OCCC — Office of Consumer Credit Commissioner",
  "OKDCC — Oklahoma Dept. of Consumer Credit",
  "TNDFI — Tennessee Dept. of Financial Institutions",
];

const footHd: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "#fff",
  marginBottom: 14,
};
const footLi: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  marginBottom: 7,
  color: "rgba(255,255,255,.65)",
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "rgba(255,255,255,.7)" }}>
      <AnimateIn from="up" distance={30} start="top 95%">
        <div
          className="lt-wrap lt-footer-grid"
          style={{
            padding: "56px 40px 28px",
            display: "grid",
            gridTemplateColumns: "1.5fr .8fr .8fr 1.4fr",
            gap: 40,
          }}
        >
          <div>
            <Image
              src="/images/loantec-logo.png"
              alt="LoanTec"
              width={156}
              height={39}
              style={{ height: 39, width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p
              style={{
                fontSize: 14,
                marginTop: 16,
                maxWidth: 290,
                color: "rgba(255,255,255,.6)",
              }}
            >
              Loan management software for small lending businesses since 1996.
            </p>
            <Link href="/payments">
              <Button
                variant="secondary"
                size="sm"
                style={{
                  marginTop: 18,
                  background: "transparent",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,.28)",
                }}
              >
                Payment Portal
              </Button>
            </Link>
            <div style={{ marginTop: 18 }}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LoanTec on LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "var(--radius)",
                  border: "1px solid rgba(255,255,255,.28)",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {COLS.map(([hd, items]) => (
            <div key={hd}>
              <div style={footHd}>{hd}</div>
              {items.map(([label, to]) => (
                <div key={to} style={{ marginBottom: 9 }}>
                  <Link
                    href={to}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255,255,255,.65)",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          ))}

          <div>
            <div style={footHd}>Support</div>
            <div style={footLi}>Mon–Fri, 8:00 AM – 7:00 PM CST</div>
            <div style={footLi}>(830) 896-7107</div>
            <div style={footLi}>info@loantec-software.com</div>
            <div style={{ ...footHd, marginTop: 22 }}>Regulatory</div>
            {REG.map((r) => (
              <div key={r} style={{ ...footLi, fontSize: 12.5 }}>
                {r}
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div
          className="lt-wrap"
          style={{
            padding: "18px 40px",
            fontSize: 12.5,
            color: "rgba(255,255,255,.45)",
          }}
        >
          &copy; 1996–2026 LoanTec Financial Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
