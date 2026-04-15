import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "./(public)/components/Hero";
import MainContent from "./(public)/components/MainContent";
import Pricing from "./(public)/components/Pricing";

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

async function getPlans(): Promise<Plan[]> {
  const res = await fetch("http://localhost:3000/api/plans", {
    cache: "no-store", // her request'te SSR
  });
  if (!res.ok) throw new Error("Plans fetch failed");
  return res.json();
}

export default async function Home() {
  const plans = await getPlans();

  return (
    <div className="scroll-smooth bg-[#f9f5f8] text-[#2f2e30] antialiased">
      <Navbar />
      <main>
        <Hero />
        <MainContent />
        <Pricing plans={plans} />
      </main>
      <Footer />
    </div>
  );
}
