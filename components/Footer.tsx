import { navLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-md bg-accent text-white flex items-center justify-center font-mono text-[12px] font-semibold">
            SV
          </span>
          <span className="text-[14px] font-medium text-ink">SoftVibe Services</span>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] text-ink-soft hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[13px] text-ink-soft">© 2026 SoftVibe Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
