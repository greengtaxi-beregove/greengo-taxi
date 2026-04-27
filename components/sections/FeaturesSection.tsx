"use client";

import { useEffect, useRef, useState } from "react";
import { FEATURES } from "@/lib/constants";

const ICONS = [
  <svg key="bolt" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  <svg key="map" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
    <path d="M9 3v15M15 6v15" />
  </svg>,
  <svg key="clock" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
];

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="features" className="lg:hidden relative bg-brand-green overflow-hidden px-4 pt-9 pb-32">

      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div
          className="anim-blob-b absolute -top-20 -right-16 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,80,10,0.60) 0%, transparent 68%)",
            filter: "blur(54px)",
          }}
        />
        <div
          className="anim-blob-a absolute -bottom-16 -left-20 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(190,240,120,0.40) 0%, transparent 68%)",
            filter: "blur(58px)",
          }}
        />
        <div
          className="anim-blob-c absolute top-[45%] right-[30%] w-44 h-44 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)",
            filter: "blur(44px)",
          }}
        />
      </div>

      {/* ── Eyebrow ── */}
      <div
        className={`relative z-10 flex items-center gap-3 mb-5
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <span className="h-px w-7 bg-white/50" />
        <p className="text-[10px] font-bold tracking-[0.3em] text-white/45 uppercase">
          Наші переваги
        </p>
      </div>

      {/* ── Glass grid ── */}
      <div className="relative z-10 grid grid-cols-2 gap-[10px]">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className={`relative flex flex-col justify-between rounded-[24px] p-5 overflow-hidden
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.94]"}`}
            style={{
              transitionDelay: `${0.07 + i * 0.09}s`,
              minHeight: "168px",
              background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)",
              backdropFilter: "blur(28px) saturate(140%)",
              WebkitBackdropFilter: "blur(28px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.22)",
              borderTop: "1px solid rgba(255,255,255,0.48)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.14)",
            }}
          >
            {/* Glass rim shimmer */}
            <span
              aria-hidden
              className="absolute top-0 left-[15%] right-[15%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)" }}
            />

            {/* Icon */}
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.20)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              {ICONS[i]}
            </div>

            {/* Text */}
            <div className="mt-4">
              <p
                className="font-black text-white leading-snug tracking-[-0.2px]"
                style={{ fontSize: "clamp(13px, 3.6vw, 15px)" }}
              >
                {feature.title}
              </p>
              <p
                className="text-white/65 font-medium leading-snug mt-1"
                style={{ fontSize: "clamp(11px, 3vw, 12px)" }}
              >
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
