"use client";

export default function RainbowBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Rainbow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,107,0.15) 0%, rgba(254,202,87,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
        style={{
          animationDelay: "2s",
          background:
            "radial-gradient(circle, rgba(72,219,251,0.15) 0%, rgba(84,160,255,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
        style={{
          animationDelay: "4s",
          background:
            "radial-gradient(circle, rgba(255,159,243,0.15) 0%, rgba(95,39,205,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse-glow"
        style={{
          animationDelay: "3s",
          background:
            "radial-gradient(circle, rgba(254,202,87,0.12) 0%, rgba(72,219,251,0.08) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
