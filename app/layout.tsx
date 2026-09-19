import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: BRAND.name,
  description: `${BRAND.name} — ${BRAND.tagline}`,
  authors: [{ name: "Dario Aoiz" }],
  creator: "Yuju Agencia Creativa IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-bg text-text" suppressHydrationWarning>
        <div className="flex h-dvh overflow-hidden">
          <Sidebar />
          <main className="relative flex-1 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
