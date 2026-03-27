const primaryRotations = [-32, -20, -8, 4, 16, 28, 40]
const secondaryRotations = [-18, -6, 6, 18, 30]

export function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,color-mix(in_oklab,var(--foreground)_12%,transparent),transparent_34%),radial-gradient(circle_at_82%_58%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent_28%)]" />
      <svg
        viewBox="0 0 900 900"
        className="absolute top-1/2 right-[-18rem] h-[58rem] w-[58rem] -translate-y-1/2 opacity-45 md:right-[-10rem] md:h-[72rem] md:w-[72rem]"
        fill="none"
      >
        <defs>
          <linearGradient id="mesh-primary" x1="130" y1="210" x2="760" y2="720">
            <stop offset="0%" stopColor="rgba(255,255,255,0.88)" />
            <stop offset="28%" stopColor="rgba(196,230,255,0.48)" />
            <stop offset="52%" stopColor="rgba(255,255,255,0.82)" />
            <stop offset="74%" stopColor="rgba(230,205,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.86)" />
          </linearGradient>
          <linearGradient
            id="mesh-secondary"
            x1="240"
            y1="150"
            x2="640"
            y2="780"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="50%" stopColor="rgba(200,255,245,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
          <filter id="mesh-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        <g filter="url(#mesh-glow)">
          {primaryRotations.map((rotation) => (
            <ellipse
              key={`primary-${rotation}`}
              cx="470"
              cy="450"
              rx="170"
              ry="360"
              transform={`rotate(${rotation} 470 450)`}
              stroke="url(#mesh-primary)"
              strokeWidth="0.9"
            />
          ))}
          {secondaryRotations.map((rotation) => (
            <ellipse
              key={`secondary-${rotation}`}
              cx="470"
              cy="450"
              rx="122"
              ry="312"
              transform={`rotate(${rotation} 470 450)`}
              stroke="url(#mesh-secondary)"
              strokeWidth="0.65"
            />
          ))}
          <ellipse
            cx="470"
            cy="450"
            rx="208"
            ry="372"
            transform="rotate(14 470 450)"
            stroke="url(#mesh-secondary)"
            strokeWidth="0.55"
          />
          <ellipse
            cx="470"
            cy="450"
            rx="150"
            ry="274"
            transform="rotate(-12 470 450)"
            stroke="url(#mesh-secondary)"
            strokeWidth="0.55"
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_45%,transparent_0%,transparent_38%,var(--background)_72%)]" />
    </div>
  )
}
