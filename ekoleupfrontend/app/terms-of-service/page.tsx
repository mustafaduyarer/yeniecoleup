import type { Metadata } from "next";
import LegalPageTemplate from "../components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms of Service | EcoleUP",
  description: "EcoleUP Terms of Service",
};

export default function TermsOfServicePage() {
  return <LegalPageTemplate pageKey="terms" />;
}
