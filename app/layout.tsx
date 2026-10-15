import "./globals.css";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Doumi — Franchise Donut & Milk",
  description: "Peluang kemitraan Doumi: modal terjangkau, sistem terstruktur, pendampingan penuh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id"><body>
      {children}
      <WhatsAppButton />
      <Chatbot />
    </body></html>
  );
}
