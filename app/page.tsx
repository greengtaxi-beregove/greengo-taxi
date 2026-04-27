"use client";

import Header from "@/components/layout/Header";
import HeroDesktop from "@/components/sections/HeroDesktop";
import HeroMobile from "@/components/sections/HeroMobile";
import StatsSection from "@/components/sections/StatsSection";
import FormSection from "@/components/sections/FormSection";
import RoutesSection from "@/components/sections/RoutesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { track } from "@/lib/analytics";

export default function HomePage() {
  return (
    <>
      {/* ── DESKTOP: full-screen photo hero ── */}
      <div className="hidden lg:block relative">
        <Header />
        <HeroDesktop />
      </div>

      {/* ── MOBILE: stacked sections ── */}
      <div className="lg:hidden">
        <HeroMobile />
        <StatsSection />
        <FormSection />
        <RoutesSection />
        <FeaturesSection />
      </div>

      {/* ── SEO text block (visually hidden, indexed by search engines) ── */}
      <div className="sr-only">
        <h2>Таксі в Береговому — GreenGo Taxi</h2>
        <p>
          GreenGo Taxi — служба таксі в місті Берегово, Закарпатська область.
          Замовте електрокар за 5 хвилин, цілодобово. Телефон: 050 220 5500.
        </p>
        <h3>Маршрути</h3>
        <ul>
          <li>Таксі Берегово — Chizay</li>
          <li>Таксі Берегово — Бакта</li>
          <li>Таксі Берегово — Жайворонок</li>
          <li>Таксі Берегово — Лужанка</li>
          <li>Таксі по місту Берегово</li>
        </ul>
        <h3>Переваги GreenGo Taxi</h3>
        <ul>
          <li>Середній час подачі — 5 хвилин</li>
          <li>Парк 40+ електрокарів Renault Zoe</li>
          <li>Робота 24/7, без вихідних</li>
          <li>Замовлення онлайн або по телефону</li>
        </ul>
        <address>
          GreenGo Taxi, Берегово, Закарпатська область, Україна.
          Телефон: <a href="tel:+380502205500">050 220 5500</a>
        </address>
      </div>

      {/* ── Sticky mobile call bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 pb-[calc(0.875rem+env(safe-area-inset-bottom))] bg-brand-cream/96 backdrop-blur-md border-t border-brand-black/[0.06]">
        <a
          href={PHONE_HREF}
          onClick={() => track.phoneCallClicked("sticky_bar")}
          className="relative flex items-center gap-4 w-full bg-brand-green rounded-2xl px-5 py-3.5 overflow-hidden active:scale-[0.98] transition-transform duration-150 shadow-[0_6px_28px_rgba(109,179,63,0.30)]"
        >
          <span className="anim-call-1 absolute left-[22px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/25 pointer-events-none" />
          <span className="anim-call-2 absolute left-[22px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 pointer-events-none" />
          <span className="relative z-10 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </span>
          <div className="relative z-10 flex flex-col flex-1 min-w-0">
            <span className="text-[20px] font-black text-white leading-none tracking-tight">
              {PHONE_NUMBER}
            </span>
          </div>
          <svg className="relative z-10 text-white/50 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </>
  );
}
