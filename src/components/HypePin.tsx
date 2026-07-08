export function HypePin({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden
      className="drop-shadow-[0_10px_20px_rgba(124,58,237,0.35)]"
    >
      <defs>
        <linearGradient id="hype-pin-gradient" x1="6" y1="4" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="55%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <path
        d="M28 2C15.85 2 6 11.85 6 24c0 16.5 22 30 22 30s22-13.5 22-30C50 11.85 40.15 2 28 2Z"
        fill="url(#hype-pin-gradient)"
      />
      <circle cx="28" cy="23" r="9" fill="white" />
    </svg>
  );
}
