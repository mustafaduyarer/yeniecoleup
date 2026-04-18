import type { Metadata } from "next";
import LegalPageTemplate from "../components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy | EcoleUP",
  description: "EcoleUP Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <LegalPageTemplate pageKey="privacy" />;
}
