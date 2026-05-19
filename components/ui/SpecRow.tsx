export function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line/20 py-2">
      <span className="text-spec text-[0.75rem] font-medium uppercase text-steel">
        {label}
      </span>
      <span className="text-spec text-small text-ink text-right">{value}</span>
    </div>
  );
}
