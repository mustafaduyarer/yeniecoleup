"use client";

import { useLanguage } from "@/lib/i18n/language-context";

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

export default function Pricing({ plans }: { plans: Plan[] }) {
  const { t } = useLanguage();
  const copy = t.pricing;

  return (
    <section id="academics" className="bg-[#0b0d12] px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-[#4a8eff]">
            {copy.badge}
          </span>
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[22px] border p-10 text-left transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-[#2e5fb8] bg-gradient-to-b from-[#161f34] to-[#11151f] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  : "border-white/10 bg-gradient-to-b from-[#141820] to-[#10131a] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              }`}
            >
              <h3 className="mb-2 text-[40px] leading-tight font-bold text-white tracking-tight">
                {plan.name}
              </h3>

              <p className="mb-10 max-w-[28ch] text-xl leading-relaxed text-[#8a93a7]">
                {plan.desc}
              </p>

              <div className="mb-12 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">$</span>
                <span className="text-7xl font-black leading-none text-white">
                  {plan.price}
                </span>
                <span className="mb-2 ml-1 text-2xl text-[#6f7a90]">
                  {copy.monthly}
                </span>
              </div>

              <ul className="mb-12 space-y-5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[28px] text-white/90"
                  >
                    <span className="text-[#0b78ff]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-3xl bg-[#2f333b] py-5 text-center text-2xl font-extrabold tracking-[0.08em] text-white transition hover:bg-[#3a3f48]">
                {copy.getStarted}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
