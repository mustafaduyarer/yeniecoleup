type PricingCardProps = {
  title: string;
  description: string;
};

export default function PricingCard({ title, description }: PricingCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#141820] p-6 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </article>
  );
}
