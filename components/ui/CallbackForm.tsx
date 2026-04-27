"use client";

import { useState } from "react";

interface CallbackFormProps {
  variant?: "desktop" | "mobile";
}

export default function CallbackForm({ variant = "desktop" }: CallbackFormProps) {
  const [form, setForm] = useState({ from: "", to: "", name: "", phone: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputCls =
    "w-full bg-brand-cream border border-brand-black/10 rounded-xl px-4 py-3 text-sm font-medium text-brand-black placeholder:text-brand-black/35 focus:border-brand-green/60 focus:bg-white transition-colors duration-150";

  if (variant === "mobile") {
    return (
      <form onSubmit={submit} className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Ваше ім'я"
            className={inputCls}
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="+380 ___ ___ ___"
            type="tel"
            className={inputCls}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-xl py-4 text-base flex items-center justify-center gap-2 transition-colors duration-200 active:scale-[0.98]"
        >
          Викликати авто
          <ArrowRight />
        </button>
        <p className="text-xs text-brand-black/40 text-center font-medium">
          Ми ніколи не передаємо ваш номер третім сторонам.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-green" />
          <input
            name="from"
            value={form.from}
            onChange={handle}
            placeholder="Звідки"
            className={`${inputCls} pl-7`}
          />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple" />
          <input
            name="to"
            value={form.to}
            onChange={handle}
            placeholder="Куди"
            className={`${inputCls} pl-7`}
          />
        </div>
        <input
          name="name"
          value={form.name}
          onChange={handle}
          placeholder="Ваше ім'я"
          className={inputCls}
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handle}
          placeholder="+380 ___ ___ ___"
          type="tel"
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-xl py-3.5 text-[15px] flex items-center justify-center gap-2 transition-colors duration-200 active:scale-[0.98]"
      >
        Викликати авто
        <ArrowRight />
      </button>
      <p className="text-[11px] text-brand-black/40 text-center font-medium">
        Ми ніколи не передаємо ваш номер третім сторонам.
      </p>
    </form>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.333 8h9.334M8.667 4.667L12 8l-3.333 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
