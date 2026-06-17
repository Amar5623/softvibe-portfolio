import { Mail, ArrowRight } from "lucide-react";
import { contact } from "@/data/portfolio-data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
              Get in touch
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-ink leading-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-5 text-[16px] text-ink-soft leading-relaxed max-w-[480px]">
              Tell us about your project and we&apos;ll get back to you with next steps — no
              automated replies, just the founders.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-ink"
              >
                <Mail size={16} className="text-accent" /> {contact.email}
              </a>
              <a
                href={`mailto:${contact.altEmail}`}
                className="inline-flex items-center gap-2 text-[14px] text-ink-soft"
              >
                <Mail size={15} className="text-ink-soft" /> {contact.altEmail}{" "}
                <span className="text-[12px]">(alternative)</span>
              </a>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mb-5">
              Start the conversation
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contact.email}?subject=New Project Inquiry`}
                className="flex items-center justify-between bg-accent text-white px-5 py-4 rounded-md text-[14.5px] font-medium hover:bg-[#15362a] transition-colors"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${contact.email}?subject=Free Consultation Request`}
                className="flex items-center justify-between border border-border px-5 py-4 rounded-md text-[14.5px] font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Book a Free Consultation <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${contact.email}?subject=Quote Request`}
                className="flex items-center justify-between border border-border px-5 py-4 rounded-md text-[14.5px] font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Get a Free Quote <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
