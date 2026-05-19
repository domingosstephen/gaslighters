export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="block h-[2px] w-6 bg-ember" />
      <span className="text-label text-steel">{children}</span>
    </div>
  );
}
