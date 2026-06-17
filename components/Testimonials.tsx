import { Star } from "lucide-react";
import { testimonials } from "@/data/portfolio-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[560px] mb-14">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            Client voices
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
            What clients say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.displayName}
              className="bg-surface border border-border rounded-lg p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <blockquote className="text-[15px] text-ink leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-semibold shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatarInitials}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">{t.displayName}</p>
                  <p className="text-[13px] text-ink-soft">
                    {t.title} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
