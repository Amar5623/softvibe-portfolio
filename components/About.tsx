import { Check } from "lucide-react";
import { values, processSteps, industries } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
              About SoftVibe
            </p>
            <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
              Two founders. Full ownership. No outsourcing.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
              SoftVibe Services is a software development agency focused on creating modern,
              scalable, and business-oriented digital solutions. We specialize in building
              production-ready web applications, cloud-based software, and custom business
              systems using current technology — not legacy frameworks held together with
              workarounds.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Our mission is simple: build reliable, scalable, production-ready software that
              helps businesses grow — and stay around long after launch to support it.
            </p>

            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mb-4">
                Industries we serve
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span
                    key={i}
                    className="text-[13px] font-medium text-ink bg-surface border border-border px-3 py-1.5 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <h3 className="text-[15px] font-semibold text-ink">{v.title}</h3>
                </div>
                <p className="text-[14px] text-ink-soft leading-relaxed pl-[30px]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            How we work
          </p>
          <h3 className="text-[26px] font-semibold tracking-tight text-ink mb-10">
            Our process, step by step
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {processSteps.map((step, idx) => (
              <div key={step.title}>
                <span className="font-mono text-[13px] text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 text-[15px] font-semibold text-ink">{step.title}</h4>
                <p className="mt-1.5 text-[13.5px] text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
