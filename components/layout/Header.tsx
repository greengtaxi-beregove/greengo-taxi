"use client";

import Image from "next/image";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 xl:px-12 h-16"
      style={{
        background: "transparent",
      }}
    >
      {/* Logo — white */}
      <a href="/" className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="GreenGo Taxi"
          width={120}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />
      </a>

{/* Right: UA/HU + Phone */}
      <div className="flex items-center gap-3">
        <div
          className="hidden lg:flex items-center rounded-full px-3 py-1.5"
          style={{
            background: "rgba(255,255,255,0.09)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <button className="text-[13px] font-bold text-white px-1">UA</button>
        </div>

        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 text-white rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-200 active:scale-[0.97]"
          style={{
            background: "rgba(109,179,63,0.80)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          {PHONE_NUMBER}
        </a>
      </div>
    </header>
  );
}
