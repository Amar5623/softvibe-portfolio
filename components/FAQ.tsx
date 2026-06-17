import { Plus } from "lucide-react";
import { faqs } from "@/data/portfolio-data";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            Common questions
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
            Frequently asked questions
          </h2>

          <div className="mt-10 border-t border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5 border-b border-border">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[15.5px] font-medium text-ink">
                  {f.question}
                  <Plus
                    size={16}
                    className="text-ink-soft group-open:rotate-45 transition-transform duration-200 shrink-0"
                  />
                </summary>
                <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed pr-8">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
