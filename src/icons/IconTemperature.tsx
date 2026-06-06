interface IconProps {
  size?: number;
  className?: string;
}

export default function IconTemperature({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <circle cx="14" cy="20" r="5" stroke="#3fb950" strokeWidth="1.6" />
      <rect x="12" y="3" width="4" height="12" rx="2" stroke="#3fb950" strokeWidth="1.6" />
      <path d="M14 18 V16" stroke="#3fb950" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
