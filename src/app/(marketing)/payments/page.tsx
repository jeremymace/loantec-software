"use client";

import { Lock, ExternalLink, ShieldCheck, Phone, Mail, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import AnimateIn from "@/components/animations/AnimateIn";

export default function PaymentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Payment portal"
        title="Make a payment"
        sub="Make a payment on your LoanTec account, securely processed through REPAY."
      />
      <section style={{ background: "#fff" }}>
        <div
          className="lt-wrap lt-split"
          style={{
            padding: "72px 40px",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <AnimateIn from="left" distance={30}>
            <Card accentBar padding={40} style={{ textAlign: "center" }}>
              <span
                style={{
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  borderRadius: "var(--radius)",
                  background: "var(--black)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Lock size={28} />
              </span>
              <h3 style={{ fontSize: 24, margin: "20px 0 8px" }}>
                Secure payment portal
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "var(--text-muted)",
                  margin: "0 auto",
                  maxWidth: 380,
                  lineHeight: 1.55,
                }}
              >
                You&apos;ll be taken to our secure REPAY-powered portal to
                complete your payment. Have your account number ready.
              </p>
              <div style={{ marginTop: 26 }}>
                <a
                  href="https://loantecsoftware.repay.io/checkout/#/checkout-form/7ed8ca8b-eddc-440e-8b50-c225c6864dfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="primary"
                    iconRight={<ExternalLink size={16} />}
                  >
                    Continue to payment portal
                  </Button>
                </a>
              </div>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-subtle)",
                }}
              >
                <ShieldCheck size={15} color="var(--success)" /> Processed
                securely by REPAY
              </div>
            </Card>
          </AnimateIn>
          <AnimateIn from="right" distance={30}>
            <div>
              <SectionHead
                title="Need help with a payment?"
                maxWidth={400}
              />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "var(--text-muted)",
                  marginTop: 16,
                  lineHeight: 1.6,
                }}
              >
                Our team can walk you through it. Reach us during support hours
                and we&apos;ll get your payment sorted.
              </p>
              <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
                {(
                  [
                    [<Phone key="p" size={20} />, "(830) 896-7107"],
                    [<Mail key="m" size={20} />, "info@loantec-software.com"],
                    [<Clock key="c" size={20} />, "Mon–Fri, 8:00 AM – 7:00 PM CST"],
                  ] as [React.ReactNode, string][]
                ).map(([icon, v]) => (
                  <div
                    key={v}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      color: "var(--text-body)",
                    }}
                  >
                    <span style={{ color: "var(--blue)" }}>{icon}</span> {v}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
