export default function Logo() {
  return (
    <svg
      width="200"
      height="30"
      viewBox="0 0 600 60"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <defs>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood result="flood" flood-color="#00ffcc" flood-opacity="0.8" />
          <feComposite in="flood" in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation="4" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="10"
        y="70"
        font-family="Arial, sans-serif"
        font-size="100"
        font-weight="bold"
        fill="#00ffcc"
        filter="url(#neonGlow)"
      >
        SolveIt
      </text>
    </svg>
  );
}
