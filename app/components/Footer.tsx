"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links?: FooterLink[];
  showEmail?: boolean;
}

export default function Footer({ links, showEmail = true }: FooterProps) {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center">
          {links && links.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <p className="text-gray-500 text-sm mb-4">
            © {new Date().getFullYear()} Ayumu Kubota. All rights reserved.
          </p>

          {showEmail && (
            <a
              href="mailto:caffy.help@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
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
              caffy.help@gmail.com
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
