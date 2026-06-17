import { ExternalLink, PlayCircle, Github, Check } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/portfolio-data";

const statusColor: Record<ProjectStatus, string> = {
  live: "bg-accent",
  production: "bg-accent",
  demo: "bg-ink-soft",
  testnet: "bg-[#9A7B1B]",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[560px] mb-14">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            Selected work
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
            Featured projects
          </h2>
          <p className="mt-4 text-[16px] text-ink-soft leading-relaxed">
            Seven systems shipped for real clients — from wholesale logistics to on-chain
            marketplaces.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-surface border border-border rounded-lg p-7 lg:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`w-2 h-2 rounded-full status-dot ${statusColor[p.status]}`} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                    {p.statusLabel}
                  </span>
                  {p.suiteNote && (
                    <span className="text-[11px] font-medium text-accent bg-accent-soft px-2 py-0.5 rounded-full">
                      {p.suiteNote}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[14px] font-semibold text-accent">{p.price}</span>
              </div>

              <h3 className="text-[20px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-[13px] text-ink-soft">
                {p.client} · {p.location} · {p.industry}
              </p>
              <p className="mt-4 text-[15px] text-ink-soft leading-relaxed max-w-[680px]">
                {p.description}
              </p>

              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 max-w-[680px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13.5px] text-ink">
                    <Check size={14} className="text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11.5px] text-ink-soft bg-bg-alt border border-border px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(p.liveLink || p.demoVideo || p.codeLink) && (
                <div className="mt-6 flex flex-wrap gap-5">
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent hover:underline"
                    >
                      Visit live site <ExternalLink size={13} />
                    </a>
                  )}
                  {p.demoVideo && (
                    <a
                      href={p.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-soft hover:text-ink"
                    >
                      Watch demo <PlayCircle size={14} />
                    </a>
                  )}
                  {p.codeLink && (
                    <a
                      href={p.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-soft hover:text-ink"
                    >
                      View code <Github size={14} />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
