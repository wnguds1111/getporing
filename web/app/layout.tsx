import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Poring! — Pre-Registration",
  description: "Raise your Poring, start the evolution. A Ragnarok IP pet-raising simulation — Pre-register now!",
  openGraph: {
    title: "Get Poring! — Pre-Registration",
    description: "Hatch, raise, love, and grow your Poring together.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Nanum+Round+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
