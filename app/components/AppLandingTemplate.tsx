"use client";

import Link from "next/link";
import Image from "next/image";
import RainbowBackground from "./RainbowBackground";
import Header from "./Header";
import Footer from "./Footer";
import { FadeIn, FadeInScale, SlideIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";

export interface AppFeature {
  title: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AppInfo {
  name: string;
  tagline: string;
  logo: string;
  heroImage: string;
  basePath: string;
  features: AppFeature[];
  badges: string[];
  status: "available" | "coming_soon";
  appStoreUrl?: string;
  extraNavLinks?: NavLink[];
  extraFooterLinks?: NavLink[];
}

interface AppLandingTemplateProps {
  app: AppInfo;
}

export default function AppLandingTemplate({ app }: AppLandingTemplateProps) {
  const navLinks = [
    { label: "プライバシー", href: `${app.basePath}/privacy` },
    { label: "利用規約", href: `${app.basePath}/terms` },
    ...(app.extraNavLinks || []),
  ];

  const footerLinks = [
    { label: "プライバシーポリシー", href: `${app.basePath}/privacy` },
    { label: "利用規約", href: `${app.basePath}/terms` },
    ...(app.extraFooterLinks || []),
  ];

  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      <RainbowBackground />
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1}>
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 rounded-3xl blur-2xl glow-rainbow" />
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-white/20">
                    <Image
                      src={app.logo}
                      alt={`${app.name} Logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                  <span className="text-rainbow">{app.name}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
                  {app.tagline}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                {app.status === "coming_soon" ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-sm text-gray-300">Coming Soon</span>
                  </div>
                ) : app.appStoreUrl ? (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold mb-8"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Storeでダウンロード
                  </a>
                ) : null}
              </FadeIn>

              <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {app.badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {badge}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right: Device mockup */}
            <FadeInScale delay={0.3} duration={0.8}>
              <div className="relative flex justify-center">
                <div className="relative w-64 md:w-72 animate-float">
                  <Image
                    src={app.heroImage}
                    alt={`${app.name} App Screenshot`}
                    width={350}
                    height={700}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </FadeInScale>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-20">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
              Features
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white">
              シンプルで使いやすい機能
            </p>
          </FadeIn>

          <div className="space-y-32">
            {app.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <SlideIn
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={`text-center lg:text-left ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10 mb-6 glow-rainbow">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </SlideIn>

                {/* Device Image */}
                <SlideIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.1}
                  className={`flex justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative w-52 md:w-60 transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={600}
                      className="drop-shadow-xl"
                    />
                  </div>
                </SlideIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <FadeInScale duration={0.7}>
            <div className="glass-card rounded-3xl p-12 text-center border-rainbow">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {app.status === "coming_soon"
                  ? "もうすぐリリース"
                  : `${app.name}を始めよう`}
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                {app.status === "coming_soon"
                  ? `${app.name}は現在開発中です。リリースをお楽しみに。`
                  : `${app.name}で毎日をもっと楽しく記録しましょう。`}
              </p>
              <Link
                href={`${app.basePath}/support`}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                お問い合わせ
              </Link>
            </div>
          </FadeInScale>
        </div>
      </section>

      <Footer links={footerLinks} showEmail={false} />
    </main>
  );
}
