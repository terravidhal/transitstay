import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Journey",
  description: "A photo journey application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
