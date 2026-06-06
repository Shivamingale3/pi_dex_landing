interface IconProps {
  size?: number;
  className?: string;
}

export default function IconCpu({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="9" y="9" width="10" height="10" rx="1" stroke="#3fb950" strokeWidth="1" />
      <path d="M14 3 V4 M14 24 V25 M3 14 H4 M24 14 H25" stroke="#3fb950" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
