"use client";

import Link from "next/link";
import Image from "next/image";

const apps = [
  {
    name: "Caffy",
    description: "カフェ巡りを記録・共有するソーシャルアプリ",
    logo: "/caffy_logo.png",
    href: "/apps/caffy",
    color: "#C4A574",
    appStore: "https://apps.apple.com/jp/app/caffy",
  },
  {
    name: "Footie",
    description: "食事の写真を記録・整理するライフログアプリ",
    logo: "/footie_logo.png",
    href: "/apps/footie",
    color: "#4CAF50",
    appStore: null, // coming soon
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Ayumu Kubota
            </span>
          </div>
          <a
            href="mailto:caffy.help@gmail.com"
            className="text-sm lg:text-base text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-6 md:px-12 pt-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ayumu Kubota
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            iOS App Developer
          </p>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            日常をより豊かにするアプリを開発しています
          </p>
        </div>
      </section>

      {/* Apps Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="group bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
                    {app.logo ? (
                      <Image
                        src={app.logo}
                        alt={`${app.name} Logo`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-2xl font-bold"
                        style={{ color: app.color }}
                      >
                        {app.name[0]}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white group-hover:transition-colors"
                      style={{
                        color: "white",
                      }}
                    >
                      {app.name}
                    </h3>
                    {!app.appStore && (
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {app.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ayumu Kubota. All rights reserved.
          </p>
          <a
            href="mailto:caffy.help@gmail.com"
            className="text-gray-400 text-sm hover:text-white transition mt-2 inline-block"
          >
            caffy.help@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
