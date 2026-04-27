"use client";

import { useState, useRef, useEffect } from "react";
import { track } from "@/lib/analytics";

export default function FormSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      track.formSubmitted("mobile_section");
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  const tr = "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";
  const show = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section ref={ref} id="callback" className="lg:hidden relative bg-brand-black overflow-hidden px-4 py-10">

      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div
          className="anim-blob-b absolute -top-16 -right-20 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(109,179,63,0.62) 0%, transparent 68%)",
            filter: "blur(56px)",
          }}
        />
        <div
          className="anim-blob-a absolute -bottom-24 -left-16 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(109,179,63,0.36) 0%, transparent 68%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="anim-blob-c absolute top-[35%] left-[25%] w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,94,166,0.16) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      {/* ── Glass card ── */}
      <div
        className={`relative z-10 rounded-[28px] overflow-hidden ${tr} ${show}`}
        style={{
          transitionDelay: "0.06s",
          background: "linear-gradient(145deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(28px) saturate(150%)",
          WebkitBackdropFilter: "blur(28px) saturate(150%)",
          border: "1px solid rgba(255,255,255,0.13)",
          borderTop: "1px solid rgba(255,255,255,0.36)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 24px 64px rgba(0,0,0,0.35)",
        }}
      >
        {/* Glass rim shimmer */}
        <span
          aria-hidden
          className="absolute top-0 left-[12%] right-[12%] h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.50), transparent)" }}
        />

        <div className="px-6 pt-7 pb-7">

          {/* Live status badge */}
          <div
            className={`inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full ${tr} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              transitionDelay: "0.16s",
              background: "rgba(109,179,63,0.15)",
              border: "1px solid rgba(109,179,63,0.25)",
            }}
          >
            <span className="anim-dot w-[6px] h-[6px] rounded-full bg-brand-green flex-shrink-0" />
            <p className="text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase">
              17 авто вільно · ~4 хв
            </p>
          </div>

          {/* Headline */}
          <h2
            className={`font-black text-white leading-[1.05] tracking-[-0.4px] mb-7 ${tr} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(26px, 7.5vw, 32px)", transitionDelay: "0.22s" }}
          >
            Залиште номер —<br />передзвонимо<br />за 60 секунд
          </h2>

          {sent ? (

            /* ── Success state ── */
            <div className="flex flex-col items-center gap-4 py-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(109,179,63,0.18)", border: "1px solid rgba(109,179,63,0.30)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  stroke="#6DB33F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="text-white font-black text-2xl tracking-[-0.3px]">Дякуємо!</p>
              <p className="text-white/50 text-[13px] text-center font-medium leading-snug">
                Наш оператор зателефонує<br />протягом 60 секунд
              </p>
            </div>

          ) : (

            <form onSubmit={submit} className="flex flex-col gap-3">

              {/* Name */}
              <div
                className={`${tr} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "0.30s" }}
              >
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Ваше ім'я"
                  autoComplete="name"
                  onFocus={() => track.formStarted("mobile_section")}
                  className="w-full rounded-2xl px-4 py-[14px] text-[15px] font-medium text-white placeholder:text-white/35 outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}
                  onFocus={e => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.36)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(109,179,63,0.14)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.13)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone */}
              <div
                className={`${tr} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "0.37s" }}
              >
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="+380 ___ ___ ___"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-2xl px-4 py-[14px] text-[15px] font-medium text-white placeholder:text-white/35 outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}
                  onFocus={e => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.36)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(109,179,63,0.14)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.13)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-white rounded-2xl py-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 ${tr} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: "0.44s",
                  boxShadow: "0 4px 28px rgba(255,255,255,0.16)",
                }}
              >
                <span className="text-brand-green font-black text-[15px] tracking-[-0.2px]">
                  {loading ? "Надсилаємо..." : "Викликати авто"}
                </span>
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#6DB33F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              {/* Privacy */}
              <p
                className={`text-center text-white/28 text-[10px] font-medium ${tr} ${visible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "0.50s" }}
              >
                Не передаємо ваш номер третім сторонам
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
