import { NextResponse } from "next/server";

export async function GET() {
  const plans = [
    {
      name: "Basic Plan",
      price: "50",
      desc: "Access foundational resources for self-paced learning.",
      features: ["Responsive Live", "Adaptive Bitrate", "Analytics"],
    },
    {
      name: "Regular Plan",
      price: "75",
      desc: "Our most popular plan for active mentorship.",
      features: ["Responsive Live", "Adaptive Bitrate", "Analytics"],
      featured: true,
    },
    {
      name: "Premium Plan",
      price: "100",
      desc: "Full access to exclusive modules and certification.",
      features: ["Responsive Live", "Adaptive Bitrate", "Analytics"],
    },
  ];

  return NextResponse.json(plans);
}