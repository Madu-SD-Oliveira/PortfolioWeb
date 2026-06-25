import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madu Oliveira | Portfolio",
  description:
    "Portfólio de projetos backend, Android e frontend com identidade visual minimalista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-vintage-cream)] text-[var(--color-hud-graphite)]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
