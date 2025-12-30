"use client";

import Link from "next/link";
import Image from "next/image";
import { RainbowBackground, Header, Footer } from "@/app/components";

const navLinks = [
  { label: "プライバシー", href: "/apps/caffy/privacy" },
  { label: "利用規約", href: "/apps/caffy/terms" },
  { label: "特商法", href: "/apps/caffy/legal/tokushoho" },
];

const footerLinks = [
  { label: "プライバシーポリシー", href: "/apps/caffy/privacy" },
  { label: "利用規約", href: "/apps/caffy/terms" },
  { label: "特商法表記", href: "/apps/caffy/legal/tokushoho" },
];

export default function CaffyPage() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      <RainbowBackground />
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 md:pt-32 relative z-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:text-left w-full">
            <div className="lg:max-w-md">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur-xl glow-rainbow opacity-50" />
                  <Image
                    src="/caffy_logo.png"
                    alt="Caffy Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 relative"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-rainbow">Caffy</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                訪れたカフェ、味わったコーヒー、特別な瞬間を記録しましょう。カフェ好きのためのライフスタイルアプリです。
              </p>

              {/* App Store Button */}
              <div className="flex justify-center lg:justify-start mb-8 md:mb-12">
                <a
                  href="https://apps.apple.com/jp/app/caffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-base md:text-lg font-semibold">
                    App Storeでダウンロード
                  </span>
                </a>
              </div>
            </div>

            {/* Hero Device - device1.png (below button) */}
            <div className="relative w-56 md:w-64 lg:w-72 animate-float">
              <Image
                src="/mockdevice/device1.png"
                alt="Caffy App Main Screen"
                width={350}
                height={700}
                className="rounded-[2rem] shadow-2xl shadow-black/50"
              />
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative hidden lg:block">
            <div className="space-y-12">
              {/* Group 1: device3, device4, device5 */}
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
                  />
                </div>
              </div>

              {/* Group 2: device9, device10, device11 */}
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
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
                    className="rounded-[2rem] shadow-xl shadow-black/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer links={footerLinks} showEmail={false} />
    </main>
  );
}
