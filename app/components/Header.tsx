"use client";

import Link from "next/link";

interface HeaderProps {
  showAppLink?: {
    name: string;
    href: string;
  };
  showContactEmail?: boolean;
  navLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export default function Header({
  showAppLink,
  showContactEmail = false,
  navLinks,
}: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-4 mt-4">
        <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center glow-rainbow">
              <span className="text-sm font-bold text-white">AK</span>
            </div>
            <span className="text-lg font-semibold text-white">
              Ayumu Kubota
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}

            {showAppLink && (
              <Link
                href={showAppLink.href}
                className="text-gray-400 hover:text-white transition text-sm md:text-base"
              >
                {showAppLink.name}
              </Link>
            )}

            {showContactEmail && (
              <a
                href="mailto:caffy.help@gmail.com"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
