export function PrototypeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-hype-purple/25 bg-hype-purple/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-hype-purple ${className}`}
    >
      Prototype
    </span>
  );
}
