import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYM GP International Co., Ltd.",
  description:
    "Connect with us via WhatsApp, LINE, or WeChat. Fast and reliable multi-platform communication.",
  icons: {
    icon: [
      {
        url: "/hymgp.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/hymgp.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/hymgp.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/hymgp.jpg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
