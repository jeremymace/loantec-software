import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoanTec Financial Software",
  description:
    "Loan management software for small lending businesses since 1996. Signature, secured, and title loans — processed, tracked, and collected in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body>{children}</body>
    </html>
  );
}
