import { services } from "@/data/portfolio-data";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[560px] mb-14">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            What we do
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
            Major services
          </h2>
          <p className="mt-4 text-[16px] text-ink-soft leading-relaxed">
            From first sketch to long-term support — everything a business needs to ship and run
            real software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {services.map((s, idx) => (
            <div key={s.title} className="bg-surface p-7 hover:bg-accent-soft/40 transition-colors">
              <span className="font-mono text-[12px] text-accent">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
