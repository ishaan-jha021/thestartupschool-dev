import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import DirectoryAdvisorBot from "@/components/ecosystem/DirectoryAdvisorBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thestartupschool.in"),
  title: "The Startup School | An Alternate B-School",
  description: "An alternate B-School for all Aspiring Founders. Bridging the 4 deadly gaps of Learning, Access, Mentoring, and Community.",
  keywords: ["Startup School", "Founder", "Incubator", "Entrepreneurship", "Business School", "Startups India", "Mentorship"],
  authors: [{ name: "Gaurav Bansal" }],
  openGraph: {
    title: "The Startup School | An Alternate B-School",
    description: "An alternate B-School for all Aspiring Founders. Bridging the 4 deadly gaps of Learning, Access, Mentoring, and Community.",
    url: "https://thestartupschool.in",
    siteName: "The Startup School",
    images: [
      {
        url: "/gaurav.jpg", // Update with an actual OG image later
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup School | An Alternate B-School",
    description: "An alternate B-School for all Aspiring Founders.",
    creator: "@TheStartupSchool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-bg-main text-text-primary selection:bg-accent-blue selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <DirectoryAdvisorBot />
      </body>
    </html>
  );
}
