"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function Hero() {
  const { t } = useLanguage();
  const copy = t.hero;

  return (
    <section className="relative flex min-h-[921px] flex-col overflow-hidden lg:flex-row">
      <div className="z-10 flex w-full items-center bg-gradient-to-r from-[#0058ba]/5 to-transparent px-8 pb-20 pt-32 lg:w-1/2 lg:pl-24">
        <div className="max-w-xl">
          <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-[5.5rem]">
            {copy.titleStart} <br />
            <span className="italic text-[#0058ba]">
              {copy.titleAccent}
            </span>{" "}
            {copy.titleEnd}
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#5c5b5d] lg:text-xl">
            {copy.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#0058ba] px-10 py-4 font-bold text-white">
              {copy.programs}
            </button>
            <button className="rounded-full border border-[#0058ba]/30 px-10 py-4 font-bold text-[#0058ba]">
              {copy.learnMore}
            </button>
          </div>
        </div>
      </div>

      <div className="relative min-h-[500px] w-full lg:min-h-full lg:w-1/2">
        <div className="hero-clip-top absolute right-0 top-0 h-[60%] w-full overflow-hidden lg:h-[55%]">
          <img
            alt={copy.imageAltTop}
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPvl8tudrjfIlm72T1Vg3vV2yChDwh_YTNgadvVPMot0-G11YgUPW3OL4KKv6YTqlJPUj6H6nnlYFTzb_lsPRe69VKDD7N_HSowRZ12sb2SS-j-3QIk5_vIHs6aIneu2ITNjPvAAB9lH6a1uxG7Tshh7MHGmQ29X3Oa0v5TFJR3H2bgQLaJBPEk1MBFUZgWs50Qga7OSJPu4-vYXNC1v9yUatg2m2iJGaVTLzlg6ys3Ay33DUXgJxuOABz7M5TGG-yHzMKcf_1_LXe"
          />
        </div>
        <div className="hero-clip-bottom absolute bottom-0 right-0 h-[55%] w-[95%] overflow-hidden border-l-8 border-t-8 border-[#f9f5f8] lg:h-[58%]">
          <img
            alt={copy.imageAltBottom}
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN4x7oPGkrgaP_KruI0TWZSX0sH-z5GOy3nTIh06sk3uWTdvpOx_ge7lpPCtrU_QeU8OOiT_wlqAlLz4ey8HxU0ZIwp-7RKc22h6mi5vwuJxUDM6LY_QFQVaS-14HpXJBA7pDyMmx-VETj7NVB4q-ngJQSfR6RwE6FjVsQhRXW1BjfC5tIa3PgPzaU9DIWd9ESeZI10MHcOKdVh5oFWh9z49PksZGPHYpEw6cUen69S4TEEZLibd7MCr5SdovfLDO0RWRnGbnhpAIX"
          />
        </div>
      </div>
    </section>
  );
}
