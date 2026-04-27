"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="stats" className="lg:hidden relative bg-brand-green overflow-hidden px-4 pt-9 pb-11">

      {/* ── Ambient color blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {/* Dark shadow blob — top left */}
        <div
          className="anim-blob-a absolute -top-24 -left-20 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,80,10,0.65) 0%, transparent 68%)",
            filter: "blur(52px)",
          }}
        />
        {/* Bright highlight blob — bottom right */}
        <div
          className="anim-blob-b absolute -bottom-20 -right-16 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(190,240,120,0.45) 0%, transparent 68%)",
            filter: "blur(56px)",
          }}
        />
        {/* White luminous blob — center */}
        <div
          className="anim-blob-c absolute top-[40%] left-[55%] w-44 h-44 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
            filter: "blur(44px)",
          }}
        />
      </div>

      {/* ── Eyebrow ── */}
      <div
        className={`relative z-10 flex items-center gap-3 mb-5
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: "0s" }}
      >
        <span className="h-px w-7 bg-white/50" />
        <p className="text-[10px] font-bold tracking-[0.3em] text-white/45 uppercase">
          Чому GreenGo
        </p>
      </div>

      {/* ── Stats panel ── */}
      <div
        className={`relative z-10 flex overflow-hidden rounded-[28px]
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.96]"}`}
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.09) 100%)",
          backdropFilter: "blur(28px) saturate(140%)",
          WebkitBackdropFilter: "blur(28px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderTop: "1px solid rgba(255,255,255,0.48)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 32px rgba(0,0,0,0.14)",
          transitionDelay: "0.07s",
        }}
      >
        {/* Rim shimmer */}
        <span aria-hidden className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)" }} />

        {STATS.map((stat, i) => (
          <div key={stat.label} className="relative flex-1 flex flex-col justify-center items-center py-9 px-4 gap-2">

            {/* Divider between halves */}
            {i > 0 && (
              <span className="absolute left-0 top-[18%] bottom-[18%] w-px"
                style={{ background: "rgba(255,255,255,0.22)" }} />
            )}

            {/* Value + unit */}
            <div className="flex items-end leading-none gap-1">
              <span
                className="font-black text-white"
                style={{ fontSize: "clamp(52px, 14vw, 72px)", lineHeight: "0.88", textShadow: "0 2px 16px rgba(0,0,0,0.18)" }}
              >
                {stat.value}
              </span>
              {stat.unit && (
                <span className="font-black text-white/75 mb-1" style={{ fontSize: "clamp(20px, 5.5vw, 28px)" }}>
                  {stat.unit}
                </span>
              )}
            </div>

            {/* Label */}
            <p className="text-white/65 text-[10px] font-bold tracking-[0.22em] uppercase text-center">
              {stat.label}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
