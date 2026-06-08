"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Check, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import SectionHead from "@/components/sections/SectionHead";
import PageHeader from "@/components/sections/PageHeader";
import AnimateIn from "@/components/animations/AnimateIn";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    offices: "1 office",
    message: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSending(false);
    if (res.ok) {
      setSent(true);
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong. Please try again.");
    }
  }

  if (sent) {
    return (
      <AnimateIn from="up" distance={20}>
        <Card padding={40} style={{ textAlign: "center" }}>
          <span
            style={{
              width: 56,
              height: 56,
              margin: "0 auto",
              borderRadius: "50%",
              background: "var(--success-bg)",
              color: "var(--success)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Check size={30} strokeWidth={2.4} />
          </span>
          <h3 style={{ fontSize: 24, margin: "20px 0 8px" }}>
            Thanks — we&apos;ll be in touch.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            A member of our team will reach out within one business day. Need us
            sooner? Call (830) 896-7107.
          </p>
          <div style={{ marginTop: 24 }}>
            <Button variant="secondary" onClick={() => setSent(false)}>
              Send another message
            </Button>
          </div>
        </Card>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn from="left" distance={30}>
      <Card padding={36}>
        <form onSubmit={handleSubmit}>
          <div
            className="lt-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}
          >
            <Input label="Name" placeholder="Jane Lender" name="name" value={form.name} onChange={set("name")} required />
            <Input label="Company" placeholder="Acme Loan Co." name="company" value={form.company} onChange={set("company")} />
            <Input label="Email" type="email" placeholder="jane@acmeloan.com" name="email" value={form.email} onChange={set("email")} required />
            <Input label="Phone" type="tel" placeholder="(555) 123-4567" name="phone" value={form.phone} onChange={set("phone")} />
          </div>
          <div style={{ marginTop: 18 }}>
            <Select
              label="Number of offices"
              name="offices"
              value={form.offices}
              onChange={set("offices")}
              options={[
                "1 office",
                "2\u20135 offices",
                "6\u201310 offices",
                "10+ offices",
              ]}
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 14,
                color: "var(--text-strong)",
                marginBottom: 7,
              }}
            >
              Message
            </label>
            <textarea
              rows={4}
              required
              name="message"
              value={form.message}
              onChange={set("message")}
              placeholder="Tell us about your operation and what you're looking for."
              style={{
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "var(--font-body)",
                fontSize: 15.5,
                color: "var(--text-strong)",
                padding: "12px 14px",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--radius)",
                resize: "vertical",
                outline: "none",
              }}
            />
          </div>
          {error && (
            <p style={{ color: "var(--red)", fontFamily: "var(--font-body)", fontSize: 14, marginTop: 12, marginBottom: 0 }}>
              {error}
            </p>
          )}
          <div style={{ marginTop: 24 }}>
            <Button type="submit" variant="primary" fullWidth disabled={sending}>
              {sending ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </Card>
    </AnimateIn>
  );
}

function DirectContact() {
  const rows: [React.ReactNode, string, string, string | null][] = [
    [<Phone key="p" size={22} />, "Phone", "(830) 896-7107", "tel:8308967107"],
    [<Mail key="m" size={22} />, "Email", "info@loantec-software.com", "mailto:info@loantec-software.com"],
    [<Clock key="c" size={22} />, "Hours", "Mon–Fri, 8:00 AM – 7:00 PM CST", null],
  ];

  return (
    <AnimateIn from="right" distance={30}>
      <div>
        <SectionHead title="Talk to us directly" maxWidth={460} />
        <div style={{ display: "grid", gap: 16, marginTop: 28 }}>
          {rows.map(([icon, label, value, href]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  borderRadius: "var(--radius)",
                  background: "var(--black)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 12.5,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 18,
                      color: "var(--text-strong)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 18,
                      color: "var(--text-strong)",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 32,
            padding: "22px 24px",
            background: "var(--gray-50)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--text-strong)",
            }}
          >
            Already a customer?
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14.5,
              color: "var(--text-muted)",
              margin: "6px 0 14px",
            }}
          >
            Make a payment on your LoanTec account through the payment portal.
          </p>
          <Link href="/payments">
            <Button variant="secondary" size="sm">
              Go to payment portal
            </Button>
          </Link>
        </div>
      </div>
    </AnimateIn>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        sub="Whether you're ready to get started or just have questions, we're here."
      />
      <section style={{ background: "#fff" }}>
        <div
          className="lt-wrap lt-split"
          style={{
            padding: "72px 40px",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <ContactForm />
          <DirectContact />
        </div>
      </section>
    </>
  );
}
