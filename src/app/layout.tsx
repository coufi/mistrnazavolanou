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

const title = "Mistr na zavolání – hodinový manžel pro Prahu a okolí";
const description =
  "Hodinový manžel pro opravy, montáže, drobné instalatérské práce, práci se dřevem a menší rekonstrukce v Praze a okolí.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Mistr na zavolání",
  keywords: [
    "hodinový manžel",
    "opravy domácnosti",
    "montáž nábytku",
    "drobné rekonstrukce",
    "Praha a okolí",
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
