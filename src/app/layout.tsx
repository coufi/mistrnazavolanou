import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Mistr na zavolání – opravy, montáže a menší rekonstrukce";
const description =
  "Opravy, montáže, drobné instalatérské práce, práce se dřevem a menší rekonstrukce bez zbytečných okolků.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Mistr na zavolání",
  keywords: [
    "opravy domácnosti",
    "montáž nábytku",
    "drobné rekonstrukce",
    "řemeslné práce",
  ],
  openGraph: {
    title,
    description,
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
