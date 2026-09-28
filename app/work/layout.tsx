import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Works — Thoriq Khoir",
  description:
    "Complete selected archive of 12 web applications, fintech systems, education platforms, and government digital solutions by Thoriq Khoir.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
