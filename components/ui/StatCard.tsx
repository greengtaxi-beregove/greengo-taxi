interface StatCardProps {
  value: string;
  unit: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, unit, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl font-extrabold text-brand-black leading-none">
          {value}
        </span>
        {unit && (
          <span className="text-xl font-bold text-brand-green leading-none ml-0.5">
            {unit}
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-brand-black/50 mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
