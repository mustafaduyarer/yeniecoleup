import type { Metadata } from "next";
import LegalPageTemplate from "../components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Content Rights | EcoleUP",
  description: "EcoleUP Content Rights",
};

export default function ContentRightsPage() {
  return <LegalPageTemplate pageKey="contentRights" />;
}
