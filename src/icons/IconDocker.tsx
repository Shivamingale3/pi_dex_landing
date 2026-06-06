interface IconProps {
  size?: number;
  className?: string;
}

export default function IconDocker({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <rect x="5" y="7" width="18" height="12" rx="3" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="7" y="5" width="14" height="5" rx="2" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="10" y="3" width="8" height="4" rx="1.5" stroke="#3fb950" strokeWidth="1.6" />
      <circle cx="10" cy="14" r="1" fill="#3fb950" />
      <circle cx="14" cy="14" r="1" fill="#3fb950" />
      <circle cx="18" cy="14" r="1" fill="#3fb950" />
    </svg>
  );
}
