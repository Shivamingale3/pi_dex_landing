interface IconProps {
  size?: number;
  className?: string;
}

export default function IconSsh({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <rect x="4" y="6" width="20" height="16" rx="3" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="8" y="10" width="12" height="8" rx="1" stroke="#3fb950" strokeWidth="1" />
      <circle cx="14" cy="14.5" r="1.5" fill="#3fb950" />
    </svg>
  );
}
