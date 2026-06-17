"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-container mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="w-8 h-8 rounded-md bg-accent text-white flex items-center justify-center font-mono text-[13px] font-semibold tracking-tight">
            SV
          </span>
          <span className="text-[15px] tracking-tight">
            <span className="font-semibold text-ink">SoftVibe</span>{" "}
            <span className="font-medium text-ink-soft">Services</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors ${
                    isActive ? "text-accent" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 bg-accent text-white text-[14px] font-medium px-4 py-2.5 rounded-md hover:bg-[#15362a] transition-colors"
        >
          Get a Free Quote
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-bg border-t border-border ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                onClick={() => setOpen(false)}
                href={link.href}
                className="block py-3 text-[15px] font-medium text-ink border-b border-border/70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="inline-flex w-full justify-center bg-accent text-white text-[14px] font-medium px-4 py-3 rounded-md"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
