import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PiDex — Home Server Watchman",
  description:
    "PiDex watches your server and alerts you on Telegram for SSH logins, Docker events, resource thresholds, and more. Single Go binary, self-updating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
