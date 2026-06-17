import { Mail, ExternalLink } from "lucide-react";
import { team } from "@/data/portfolio-data";

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-[560px] mb-14">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent font-medium mb-4">
            Developer team
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-ink leading-tight">
            The team behind SoftVibe
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-[760px]">
          {team.map((m) => (
            <div key={m.name} className="bg-surface border border-border rounded-lg p-8">
              <span className="w-14 h-14 rounded-full bg-accent-soft text-accent flex items-center justify-center font-mono text-[15px] font-semibold">
                {m.initials}
              </span>
              <h3 className="mt-5 text-[18px] font-semibold text-ink">{m.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {m.roles.map((r) => (
                  <span
                    key={r}
                    className="text-[12px] font-medium text-accent bg-accent-soft px-2.5 py-1 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-1.5">
                {m.skills.map((s) => (
                  <li key={s} className="text-[13.5px] text-ink-soft">
                    — {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4">
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft hover:text-accent"
                  >
                    <Mail size={13} /> {m.email}
                  </a>
                )}
                {m.portfolio && (
                  <a
                    href={m.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft hover:text-accent"
                  >
                    <ExternalLink size={13} /> Portfolio
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
