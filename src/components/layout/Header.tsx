"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

const LINKS: [string, string][] = [
  ["/features", "Features"],
  ["/pricing", "Pricing"],
  ["/partners", "Integrations"],
  ["/states", "Your State"],
  ["/resources", "Resources"],
  ["/about", "About"],
];

function useIsMobile(bp = 1000) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth <= bp);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [bp]);
  return m;
}

export default function Header() {
  const mobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobile) setOpen(false);
  }, [mobile]);

  useGSAP(
    () => {
      if (!mobileNavRef.current || !open) return;
      const links = mobileNavRef.current.querySelectorAll("a, button");
      gsap.from(links, {
        opacity: 0,
        y: -10,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    { scope: mobileNavRef, dependencies: [open] }
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(255,255,255,.94)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="lt-wrap"
        style={{
          height: 76,
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Link
          href="/"
          style={{ display: "inline-flex", lineHeight: 0, flexShrink: 0 }}
        >
          <Image
            src="/images/loantec-logo.png"
            alt="LoanTec"
            width={156}
            height={39}
            style={{ height: 39, width: "auto" }}
            priority
          />
        </Link>

        {!mobile && (
          <nav style={{ display: "flex", gap: 22, marginLeft: 6 }}>
            {LINKS.map(([to, label]) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  href={to}
                  style={{
                    color: active ? "var(--red)" : "var(--text-body)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    fontSize: 15.5,
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    transition: "color var(--dur) var(--ease)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--red)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = active
                      ? "var(--red)"
                      : "var(--text-body)")
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}

        {!mobile && (
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Link
              href="/payments"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 13.5,
                letterSpacing: ".07em",
                textTransform: "uppercase",
                color: "var(--text-strong)",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Payment Portal
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Request a demo
              </Button>
            </Link>
          </div>
        )}

        {mobile && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              marginLeft: "auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-strong)",
            }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {mobile && open && (
        <nav
          ref={mobileNavRef}
          style={{
            borderTop: "1px solid var(--border)",
            background: "#fff",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ padding: "8px 18px 22px" }}>
            {LINKS.map(([to, label]) => (
              <Link
                key={to}
                href={to}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 4px",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "var(--text-strong)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/payments"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 4px 18px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: ".07em",
                textTransform: "uppercase",
                color: "var(--red)",
                textDecoration: "none",
              }}
            >
              Payment Portal
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" fullWidth>
                Request a demo
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
