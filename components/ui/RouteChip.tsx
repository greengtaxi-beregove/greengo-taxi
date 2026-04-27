interface RouteChipProps {
  name: string;
}

export default function RouteChip({ name }: RouteChipProps) {
  return (
    <div className="flex items-center gap-1.5 bg-brand-white border border-brand-black/10 rounded-full px-3.5 py-1.5 hover:border-brand-green/40 hover:bg-brand-green-light/30 transition-colors duration-200 cursor-pointer">
      <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
        <path
          d="M5 0C2.24 0 0 2.24 0 5C0 8.75 5 13 5 13C5 13 10 8.75 10 5C10 2.24 7.76 0 5 0ZM5 6.5C4.17 6.5 3.5 5.83 3.5 5C3.5 4.17 4.17 3.5 5 3.5C5.83 3.5 6.5 4.17 6.5 5C6.5 5.83 5.83 6.5 5 6.5Z"
          fill="#6DB33F"
        />
      </svg>
      <span className="text-sm font-semibold text-brand-black">{name}</span>
    </div>
  );
}
