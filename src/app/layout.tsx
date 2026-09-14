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

export const metadata: Metadata = {
  title: "Fanuel Gebru, software engineer",
  description:
    "Final-year computing science student in Aberdeen. I build backend systems and machine learning tools, including VintageET, a second-hand fashion marketplace for Ethiopia.",
  openGraph: {
    title: "Fanuel Gebru, software engineer",
    description:
      "Backend and machine learning work from Aberdeen, built for people who will actually use it.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f3f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
