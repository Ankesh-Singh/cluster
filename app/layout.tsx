import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/src/context/AuthContext";

export const metadata: Metadata = {
  title: "Cluster — Task Board",
  description: "Organize your tasks efficiently with Cluster Kanban board.",
  authors: [{ name: "Ankesh Singh", url: "https://aanks.xyz" }],
  creator: "Ankesh Singh",
  openGraph: {
    title: "Cluster — Task Board",
    description: "Organize your tasks efficiently with Cluster Kanban board.",
    url: "https://aanks.xyz",
    siteName: "Cluster",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
