import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} - Portfolio`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

