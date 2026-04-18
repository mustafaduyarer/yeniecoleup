import type { Metadata } from "next";
import LegalPageTemplate from "../components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Consent Form for Under 16 | EcoleUP",
  description: "EcoleUP Consent Form for Users Under 16",
};

export default function ConsentFormUnder16Page() {
  return <LegalPageTemplate pageKey="consentUnder16" />;
}
