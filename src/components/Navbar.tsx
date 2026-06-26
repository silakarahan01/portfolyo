"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToHref } from "@/lib/lenis";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Portfolyo", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "Hakkımda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToHref(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-md border-b border-[#1e293b]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end h-16">
          {/* Desktop Links — navbarda ortalanmış */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium animated-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Sağ — GitHub (masaüstü) + mobil menü butonu */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/silakarahan01"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-sky-600 text-sky-400 text-sm font-medium hover:bg-sky-600 hover:text-white transition-all"
            >
              GitHub
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü"
              className="md:hidden text-slate-400 hover:text-sky-400 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/silakarahan01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-1.5 rounded-full border border-sky-600 text-sky-400 text-sm font-medium hover:bg-sky-600 hover:text-white transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
