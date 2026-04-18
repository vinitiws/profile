import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vinicius Nascimento | Software Engineer",
    template: "%s | Vinicius Nascimento",
  },
  description:
    "Portfólio de Vinicius Nicacio do Nascimento - Analista de Sistemas e desenvolvedor Full Stack especializado em React, Next.js, Java e Node.js",
  keywords: [
    "Vinicius Nascimento",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "Python",
    "Portfólio",
  ],
  authors: [{ name: "Vinicius Nicacio do Nascimento" }],
  creator: "Vinicius Nicacio do Nascimento",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://github.com/vinitiws/portfolio",
    title: "Vinicius Nascimento | Software Engineer",
    description:
      "Portfólio de Vinicius Nicacio do Nascimento - Analista de Sistemas e desenvolvedor Full Stack",
    siteName: "Vinicius Nascimento Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Nascimento | Software Engineer",
    description:
      "Portfólio de Vinicius Nicacio do Nascimento - Analista de Sistemas e desenvolvedor Full Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
