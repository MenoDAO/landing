import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | MenoDAO — Healthcare Financing Platform",
  description:
    "MenoDAO is a community-driven healthcare financing platform. All payments are in Kenyan Shillings (KES) via licensed mobile money providers. We do not facilitate cryptocurrency transactions.",
  openGraph: {
    title: "Compliance | MenoDAO",
    description:
      "Community-powered dental care platform in Kenya. KES payments via licensed mobile money only.",
    url: "https://menodao.org/compliance",
  },
  alternates: {
    canonical: "https://menodao.org/compliance",
  },
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
