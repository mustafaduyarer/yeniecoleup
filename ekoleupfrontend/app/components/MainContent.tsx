"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function MainContent() {
  const { t } = useLanguage();
  const copy = t.main;

  return (
    <>
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-[#0058ba]">
              {copy.introBadge}
            </span>
            <h2 className="text-4xl font-extrabold lg:text-5xl">
              {copy.introTitle}
            </h2>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold">{copy.whyTitle}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#0058ba]" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card title={copy.card1Title} desc={copy.card1Desc} />
          <Card title={copy.card2Title} desc={copy.card2Desc} />
          <Card title={copy.card3Title} desc={copy.card3Desc} />
        </div>
      </section>

      <section id="about" className="bg-[#f3f0f3] px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <img
              alt={copy.aboutImageAlt}
              className="h-[500px] w-full rounded-2xl object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7bt9REfV6zegRNgx-IQ4jySL6_0FR_dtKw5KGRxYc1RWO0iREOoEYB-NEI8QHhqKT7egLtBhlUUW7CmprUozQhBdtb6pvzY3KDd7tfg3Fo8J9Oy0mpgd1YvuFvUi-TaEVeIcS-_LAkapoy0DJTrxSQAO6KP6WNoPWf-HKbWhrJegaIEWsy98FgekmQpZd0UI8d1Gssw9caZ9rEkM81ocO5YKnQQc-KD7hO3uDpHXHMJHhLYbspA2HqJl1iTecGJ1IywKTns-uNCS"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#0058ba]">
              {copy.missionBadge}
            </span>
            <h2 className="mb-8 text-4xl font-extrabold leading-tight">
              {copy.missionTitle}
            </h2>
            <p className="text-lg text-[#5c5b5d]">{copy.missionDescription}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-8 py-24">
        <div className="rounded-[2.5rem] bg-[#dedcdf]/30 p-12 shadow-[0_20px_40px_rgba(14,14,16,0.06)]">
          <h2 className="mb-4 text-4xl font-extrabold">{copy.contactTitle}</h2>
          <p className="text-[#5c5b5d]">{copy.contactLine}</p>
        </div>
      </section>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-10 shadow-[0_20px_40px_rgba(14,14,16,0.06)]">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-[#5c5b5d]">{desc}</p>
    </div>
  );
}
