"use client";

export default function StatusBadge() {
  return (
    <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 bg-brand-green-light/60 border border-brand-green/30 rounded-full px-3.5 py-1.5 w-fit">
      <span className="relative flex h-2 w-2">
        <span className="anim-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
        <span className="anim-dot relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
      </span>
      <span className="text-[11px] font-semibold tracking-widest text-brand-black uppercase">
        17 вільних авто зараз
      </span>
      <span className="text-brand-black/30 text-[11px]">·</span>
      <span className="text-[11px] font-medium tracking-wide text-brand-black/70">
        ~4 хв подача
      </span>
    </div>
  );
}
