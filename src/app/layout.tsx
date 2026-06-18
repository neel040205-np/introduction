import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neel Patel | Full Stack Developer & SaaS Engineer",
  description: "Portfolio of Neel Patel - Final-year Computer Engineering Student at Dharmsinh Desai University. Building scalable web applications, automation systems, and AI-powered solutions using modern tech stacks.",
  keywords: [
    "Neel Patel", 
    "Full Stack Developer", 
    "Computer Engineering Student", 
    "Dharmsinh Desai University", 
    "MERN Stack Developer", 
    "Next.js 15 Portfolio", 
    "SaaS Developer",
    "DocElex",
    "OHRM"
  ],
  authors: [{ name: "Neel Patel" }],
  openGraph: {
    title: "Neel Patel | Full Stack Developer & SaaS Engineer",
    description: "Portfolio of Neel Patel - Final-year Computer Engineering Student at Dharmsinh Desai University. Specializing in MERN, Next.js, and AI integrations.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
