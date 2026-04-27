"use client";

import { useEffect, useRef, useState } from "react";
import { ROUTES } from "@/lib/constants";

export default function RoutesSection() {
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
    <section ref={ref} id="routes" className="lg:hidden bg-brand-cream px-5 pt-10 pb-6">

      {/* Eyebrow */}
      <div
        className={`flex items-center gap-3 mb-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <span className="h-[1.5px] w-7 rounded-full bg-brand-green" />
        <p className="text-[10px] font-bold tracking-[0.3em] text-brand-black/35 uppercase">
          Популярні напрямки
        </p>
      </div>

      {/* List */}
      <div>
        {ROUTES.map((route, i) => (
          <div
            key={route.name}
            className={`group relative flex items-center justify-between py-[18px]
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${i < ROUTES.length - 1 ? "border-b border-brand-black/[0.07]" : ""}
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ transitionDelay: `${0.08 + i * 0.09}s` }}
          >
            {/* Left indicator bar */}
            <span className="absolute left-0 top-[22%] bottom-[22%] w-[2.5px] rounded-full bg-brand-green scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-250" />

            {/* Number */}
            <span
              className="font-black text-brand-green flex-shrink-0 mr-4 leading-none select-none"
              style={{ fontSize: "clamp(38px, 10.5vw, 48px)" }}
            >
              0{i + 1}
            </span>

            {/* Name */}
            <span
              className="font-black text-brand-black flex-1 leading-none tracking-[-0.3px] group-hover:text-brand-green transition-colors duration-200"
              style={{ fontSize: "clamp(26px, 7vw, 32px)" }}
            >
              {route.name}
            </span>

            {/* Arrow */}
            <svg
              className="flex-shrink-0 ml-3 text-brand-black/20 group-hover:text-brand-green group-hover:translate-x-1 transition-all duration-200"
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p
        className={`mt-5 text-[11px] font-medium text-brand-black/30 text-center
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: `${0.08 + ROUTES.length * 0.09 + 0.08}s` }}
      >
        та будь-яка точка міста Берегово
      </p>
    </section>
  );
}
