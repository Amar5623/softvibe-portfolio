import { ArrowRight } from "lucide-react";
import { techStack } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-5">
            Software Development Agency · India
          </p>
          <h1 className="text-[40px] leading-[1.1] sm:text-[52px] sm:leading-[1.08] font-semibold tracking-tight text-ink">
            We build the software your business will still be running on in five years.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-[620px]">
            SoftVibe Services designs, builds, and ships production-ready web platforms, mobile
            apps, and business systems — reliable, scalable, and built with modern technology by
            founders who write every line themselves.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-[14px] font-medium px-5 py-3 rounded-md hover:bg-[#15362a] transition-colors"
            >
              Start Your Project <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-ink text-[14px] font-medium px-5 py-3 rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mb-4">
            Engineered with
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {techStack.map((t) => (
              <span key={t} className="font-mono text-[13px] text-ink-soft">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
