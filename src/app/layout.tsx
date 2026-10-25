import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blaue-online.com"),
  title: "Kevin Blaue | Backend & Cloud Software Developer",
  description:
    "Backend and cloud software developer focused on AWS, TypeScript, architecture governance, BFF delivery, IAM, and production ownership. Based in Calgary, AB.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kevin Blaue | Backend & Cloud Software Developer",
    description:
      "Architecture, BFF delivery, AWS backend systems, and cross-team ownership. Based in Calgary with a Canadian open work permit.",
    url: "https://blaue-online.com/",
    siteName: "Kevin Blaue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Blaue | Backend & Cloud Software Developer",
    description:
      "Architecture, BFF delivery, AWS backend systems, and cross-team ownership. Based in Calgary with a Canadian open work permit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
