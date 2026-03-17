import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Venom | Developer",
  description:
    "Developer passionate about programming, security and reverse engineering. Building powerful tools, protection systems and backend systems.",
  keywords: [
    "developer",
    "security",
    "reverse engineering",
    "Roblox",
    "Lua",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Venom" }],
  openGraph: {
    title: "Venom | Developer",
    description:
      "Developer passionate about programming, security and reverse engineering.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
