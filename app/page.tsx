"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0a0a0a] border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/caffy_logo.png"
              alt="Caffy Logo"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Caffy
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-12">
            <Link
              href="/privacy"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              利用規約
            </Link>
            <a
              href="mailto:caffy.help@gmail.com"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 md:pt-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:text-left w-full">
            <div className="lg:max-w-md">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Caffy
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                訪れたカフェ、味わったコーヒー、特別な瞬間を記録しましょう。カフェ好きのためのライフスタイルアプリです。
              </p>

              {/* App Store Button */}
              <div className="flex justify-center mb-8 md:mb-12">
                <a
                  href="https://apps.apple.com/jp/app/caffy"
                  className="inline-flex items-center gap-3 border border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white hover:text-[#0a0a0a] transition"
                >
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-base md:text-lg font-semibold">
                    App Store
                  </span>
                </a>
              </div>
            </div>

            {/* Hero Device - device1.png (below button) */}
            <div className="relative w-56 md:w-64 lg:w-72 transform transition-all duration-300 hover:scale-105 animate-float">
              <Image
                src="/mockdevice/device1.png"
                alt="Caffy App Main Screen"
                width={350}
                height={700}
              />
            </div>

            <style jsx>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px) rotateY(0deg);
                }
                25% {
                  transform: translateY(-10px) rotateY(-5deg);
                }
                50% {
                  transform: translateY(-20px) rotateY(0deg);
                }
                75% {
                  transform: translateY(-10px) rotateY(5deg);
                }
              }

              .animate-float {
                animation: float 6s ease-in-out infinite;
                transform-style: preserve-3d;
              }
            `}</style>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative hidden lg:block">
            <div className="space-y-12">
              {/* Group 1: device3, device4, device5 (related - cafe posts flow) */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="relative w-48 transform transition-all duration-300 hover:scale-105"
                  style={{
                    transform: "perspective(1000px) rotateY(10deg)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/mockdevice/device3.png"
                    alt="Caffy App Screenshot 3"
                    width={250}
                    height={500}
                  />
                </div>
                <div
                  className="relative w-56 transform transition-all duration-300 hover:scale-105"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src="/mockdevice/device4.png"
                    alt="Caffy App Screenshot 4"
                    width={280}
                    height={560}
                  />
                </div>
                <div
                  className="relative w-48 transform transition-all duration-300 hover:scale-105"
                  style={{
                    transform: "perspective(1000px) rotateY(-10deg)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/mockdevice/device5.png"
                    alt="Caffy App Screenshot 5"
                    width={250}
                    height={500}
                  />
                </div>
              </div>

              {/* Group 2: device9, device10, device11 (related - map/profile flow) */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="relative w-48 transform transition-all duration-300 hover:scale-105"
                  style={{
                    transform: "perspective(1000px) rotateY(10deg)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/mockdevice/device9.png"
                    alt="Caffy App Screenshot 9"
                    width={250}
                    height={500}
                  />
                </div>
                <div
                  className="relative w-56 transform transition-all duration-300 hover:scale-105"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src="/mockdevice/device10.png"
                    alt="Caffy App Screenshot 10"
                    width={280}
                    height={560}
                  />
                </div>
                <div
                  className="relative w-48 transform transition-all duration-300 hover:scale-105"
                  style={{
                    transform: "perspective(1000px) rotateY(-10deg)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/mockdevice/device11.png"
                    alt="Caffy App Screenshot 11"
                    width={250}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
