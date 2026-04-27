"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS, PHONE_HREF } from "@/lib/constants";
import { track } from "@/lib/analytics";

export default function HeroMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section className="lg:hidden relative min-h-[80vh] overflow-hidden">

      {/* ── Background ── */}
      <Image
        src="/cover_mob.png"
        alt="GreenGo Taxi"
        fill
        className="object-cover object-top"
        priority
        sizes="100vw"
      />

      {/* ── Top bar ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-10">
        <Image
          src="/logo.png"
          alt="GreenGo Taxi"
          width={120}
          height={40}
          className="h-10 w-auto object-contain brightness-0 invert drop-shadow-md"
          priority
        />

        {/* Burger — bare lines */}
        <button
          onClick={() => { setOpen(true); track.menuOpened(); }}
          aria-label="Відкрити меню"
          className="flex flex-col items-end gap-[7px] p-2 active:opacity-60 transition-opacity duration-150"
        >
          <span className="block w-[26px] h-[2px] rounded-full bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
          <span className="block w-[26px] h-[2px] rounded-full bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
          <span className="block w-[16px] h-[2px] rounded-full bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
        </button>
      </div>


      {/* ── Text block — centered ── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 -translate-y-[15%]">
        <p className="anim-fade-up anim-delay-2 text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase mb-3">
          Берегово · Закарпаття
        </p>
        <h1
          className="anim-fade-up anim-delay-3 font-black text-brand-green leading-[0.93] tracking-[-1px]"
          style={{ fontSize: "clamp(44px, 13vw, 58px)" }}
        >
          Твоє місто.
          <br />
          Твоє таксі.
        </h1>
        <div className="anim-fade-up anim-delay-4 flex items-center gap-2 mt-4">
          <span className="w-5 h-[2px] rounded-full bg-brand-green" />
          <p className="text-[13px] font-semibold text-white/65 tracking-[0.08em]">
            Електрокар за 5 хвилин. · 24/7
          </p>
        </div>
      </div>

      {/* ════════════════════════════════
          FROSTED SIDE PANEL
      ════════════════════════════════ */}

      {/* Dim backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] transition-all duration-400
          ${open
            ? "bg-brand-black/40 backdrop-blur-[3px] opacity-100"
            : "bg-transparent backdrop-blur-none opacity-0 pointer-events-none"
          }`}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[60]
          w-[84vw] max-w-[340px] flex flex-col
          bg-brand-cream/[0.92] backdrop-blur-2xl
          border-l border-white/60
          shadow-[-32px_0_80px_rgba(0,0,0,0.18)]
          transition-transform duration-[440ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* subtle grain overlay for glass depth */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025] rounded-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* green top edge accent */}
        <span className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-brand-green/60 to-transparent transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: open ? "0.3s" : "0s" }} />

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 pt-12 pb-5">
          <Image
            src="/logo.png"
            alt="GreenGo Taxi"
            width={96}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Закрити"
            className="w-8 h-8 flex items-center justify-center rounded-xl
              bg-brand-black/[0.06] text-brand-black/40
              hover:bg-brand-black/10 hover:text-brand-black
              active:scale-90 transition-all duration-150"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ── Divider ── */}
        <span className="mx-6 h-px bg-brand-black/8" />

        {/* ── Nav ── */}
        <nav className="flex-1 flex flex-col px-5 pt-2 pb-2 justify-center">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group relative flex items-center justify-between
                py-[13px] border-b border-brand-black/[0.07] pl-4
                transition-all duration-[320ms]
                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
              style={{ transitionDelay: open ? `${0.1 + i * 0.06}s` : "0s" }}
            >
              {/* Left indicator bar */}
              <span className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full bg-brand-green scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-250" />

              <div className="flex items-baseline gap-3">
                <span className="text-[10px] font-bold text-brand-black/25 tabular-nums leading-none">
                  0{i + 1}
                </span>
                <span className="text-[24px] font-black text-brand-black leading-[1.1] tracking-[-0.3px] group-hover:text-brand-green transition-colors duration-200">
                  {link.label}
                </span>
              </div>

              <svg
                className="text-brand-black/18 group-hover:text-brand-green group-hover:translate-x-1
                  flex-shrink-0 transition-all duration-200"
                width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          ))}
        </nav>

        {/* ── Divider ── */}
        <span className="mx-6 h-px bg-brand-black/8" />

        {/* ── Footer ── */}
        <div
          className={`px-6 pt-4 pb-10 flex flex-col gap-3
            transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: open ? "0.44s" : "0s" }}
        >
          {/* City */}
          <div className="flex items-center gap-1.5 mb-1">
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
              <path d="M4.5 0C2.015 0 0 2.015 0 4.5 0 7.875 4.5 11 4.5 11S9 7.875 9 4.5C9 2.015 6.985 0 4.5 0zm0 6A1.5 1.5 0 1 1 4.5 3 1.5 1.5 0 0 1 4.5 6z" fill="#6DB33F"/>
            </svg>
            <span className="text-[10px] font-semibold text-brand-black/35 tracking-widest uppercase">
              Берегово, Закарпаття
            </span>
          </div>

          {/* Language */}
          <div className="flex gap-2">
            <button className="flex-1 h-10 rounded-xl bg-brand-black text-white text-[12px] font-bold tracking-[0.12em]">
              UA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
