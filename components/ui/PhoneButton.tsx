"use client";

import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

interface PhoneButtonProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function PhoneButton({ size = "lg", className = "" }: PhoneButtonProps) {
  if (size === "lg") {
    return (
      <a
        href={PHONE_HREF}
        className={`relative flex items-center justify-center gap-3 w-full rounded-2xl bg-brand-green text-white font-bold text-xl py-5 px-6 transition-all duration-200 hover:bg-brand-green-hover active:scale-[0.98] ${className}`}
      >
        <span className="absolute inset-0 rounded-2xl bg-brand-green anim-pulse-ring opacity-40 pointer-events-none" />
        <PhoneIcon />
        <span>Подзвонити {PHONE_NUMBER}</span>
      </a>
    );
  }

  return (
    <a
      href={PHONE_HREF}
      className={`relative flex items-center gap-2 bg-brand-green text-white font-bold text-sm rounded-full px-4 py-2 transition-all duration-200 hover:bg-brand-green-hover ${className}`}
    >
      <PhoneIcon size={14} />
      <span>{PHONE_NUMBER}</span>
    </a>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
