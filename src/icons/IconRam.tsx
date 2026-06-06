interface IconProps {
  size?: number;
  className?: string;
}

export default function IconRam({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <rect x="3" y="7" width="22" height="14" rx="2" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="7" y="10" width="4" height="8" rx="1" stroke="#3fb950" strokeWidth="1" />
      <rect x="12" y="10" width="4" height="8" rx="1" stroke="#3fb950" strokeWidth="1" />
      <rect x="17" y="10" width="4" height="8" rx="1" stroke="#3fb950" strokeWidth="1" />
      <circle cx="7" cy="6" r="1" fill="#30363d" />
      <circle cx="12" cy="6" r="1" fill="#3fb950" />
    </svg>
  );
}
