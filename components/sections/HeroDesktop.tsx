"use client";

import Image from "next/image";
import { useState } from "react";
import { ROUTES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function HeroDesktop() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) return;
    setLoading(true);
    try {
      await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <section className="hidden lg:flex relative h-screen overflow-hidden">

      {/* ── Background photo ── */}
      <Image
        src="/cover-pc.png"
        alt="GreenGo Taxi"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* ── Left-side gradient only — right half stays clean ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.62) 30%, rgba(0,0,0,0.20) 54%, transparent 68%)",
        }}
      />

      {/* ── Subtle green atmosphere top-left ── */}
      <div
        className="anim-blob-a absolute z-[1] pointer-events-none"
        style={{
          top: "-12%", left: "-8%",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(109,179,63,0.18) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Content column — left 48%, heading + stats only ── */}
      <div className="relative z-10 h-full w-[48%] max-w-[640px] flex flex-col justify-center pl-12 xl:pl-16 pr-6 pt-[72px] -mt-12">

        <div className="flex flex-col gap-7 xl:gap-9">
          <div>
            {/* Location eyebrow */}
            <div className="anim-fade-up flex items-center gap-2.5 mb-5">
              <span className="h-px w-5 rounded-full bg-brand-green/70" />
              <p className="text-[10px] font-bold tracking-[0.32em] text-white/35 uppercase">
                Берегово · Закарпаття
              </p>
            </div>

            {/* H1 */}
            <h1
              className="anim-fade-up anim-delay-1 font-black text-brand-green leading-[0.90] tracking-[-2.5px]"
              style={{ fontSize: "clamp(52px, 5.6vw, 90px)" }}
            >
              Твоє місто.<br />Твоє таксі.
            </h1>

            {/* Logo */}
            <div className="anim-fade-up anim-delay-2 mt-2">
              <Image
                src="/logo.png"
                alt="GreenGo Taxi"
                width={220}
                height={72}
                className="w-auto object-contain brightness-0 invert"
                style={{ height: "clamp(100px, 12vw, 180px)" }}
              />
            </div>

            {/* Subtitle */}
            <p
              className="anim-fade-up anim-delay-3 mt-5 text-white/48 font-medium leading-[1.6] max-w-[400px]"
              style={{ fontSize: "clamp(13px, 1.05vw, 15px)" }}
            >
              Електрокар за 5 хвилин. Кожен провулок Берегова.
              <br />
              <span className="font-bold text-white/65 tracking-wide">UA · 24/7</span>
            </p>
          </div>

        </div>
      </div>

      {/* ── BOTTOM CENTER: routes + form ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-[720px] px-6 flex flex-col gap-3">

        {/* Routes */}
        <div className="anim-fade-up anim-delay-5 flex items-center justify-center gap-2 flex-wrap">
          <p className="text-[9px] font-bold tracking-[0.25em] text-white/22 uppercase">
            Маршрути:
          </p>
          {ROUTES.map((r) => (
            <span
              key={r.name}
              className="text-[11px] font-bold text-white/62 px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
              }}
            >
              {r.name}
            </span>
          ))}
        </div>

        {/* Horizontal form */}
        {sent ? (
          <div
            className="flex items-center gap-3 rounded-[16px] px-5 py-3.5"
            style={{
              background: "rgba(109,179,63,0.16)",
              border: "1px solid rgba(109,179,63,0.28)",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(109,179,63,0.28)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#6DB33F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-white font-black text-[14px]">
              Дякуємо! Передзвонимо за 60 секунд.
            </p>
          </div>
        ) : (
          <div
            className="rounded-[16px] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.11)",
              borderTop: "1px solid rgba(255,255,255,0.26)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.13)",
            }}
          >
            <span aria-hidden className="block h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent)" }} />
            <form onSubmit={submit} className="flex items-center gap-2.5 px-4 py-2.5">
              <input
                name="name" value={form.name} onChange={handle}
                placeholder="Ваше ім'я" autoComplete="name"
                className="flex-1 min-w-0 rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-white placeholder:text-white/28 outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                onFocus={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.36)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(109,179,63,0.13)"; }}
                onBlur={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)"; e.currentTarget.style.boxShadow = "none"; }}
              />
              <input
                name="phone" value={form.phone} onChange={handle}
                placeholder="+380 ___ ___ ___" type="tel" autoComplete="tel"
                className="flex-1 min-w-0 rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-white placeholder:text-white/28 outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                onFocus={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.36)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(109,179,63,0.13)"; }}
                onBlur={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)"; e.currentTarget.style.boxShadow = "none"; }}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex-shrink-0 bg-white rounded-xl px-5 py-2.5 flex items-center gap-1.5 hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70"
                style={{ boxShadow: "0 4px 16px rgba(255,255,255,0.12)" }}
              >
                <span className="text-brand-green font-black text-[13px] whitespace-nowrap">
                  {loading ? "Надсилаємо..." : "Викликати авто"}
                </span>
                {!loading && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="#6DB33F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Phone alt */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] font-semibold text-white/22 tracking-widest uppercase">або</span>
          <a
            href={PHONE_HREF}
            className="text-[13px] font-black text-white/55 hover:text-white transition-colors duration-200 tracking-tight"
          >
            {PHONE_NUMBER}
          </a>
        </div>

      </div>
    </section>
  );
}
