export function SectionDivider({
  number,
  total,
  label,
}: {
  number: string;
  total: string;
  label: string;
}) {
  return (
    <div className="border-t border-ink py-4">
      <div className="flex items-center justify-end gap-3">
        <span className="text-spec text-small text-steel">
          {number} / {total}
        </span>
        <span className="text-label text-steel">{label}</span>
      </div>
    </div>
  );
}
