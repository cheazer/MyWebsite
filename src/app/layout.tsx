import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-code",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Final year computing science student in Aberdeen. I build backend systems and machine learning tools, including VintageET, a second-hand fashion marketplace for Ethiopia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fanuel Gebru, software engineer",
    template: "%s | Fanuel Gebru",
  },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Fanuel Gebru" }],
  keywords: [
    "Fanuel Gebru",
    "software engineer",
    "backend engineer",
    "NestJS",
    "Next.js",
    "machine learning",
    "Aberdeen",
  ],
  openGraph: {
    title: "Fanuel Gebru, software engineer",
    description,
    type: "website",
    url: siteUrl,
    locale: "en_GB",
    siteName: "Fanuel Gebru",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanuel Gebru, software engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f2f3f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#work">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
