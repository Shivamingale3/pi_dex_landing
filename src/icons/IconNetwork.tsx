interface IconProps {
  size?: number;
  className?: string;
}

export default function IconNetwork({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <circle cx="14" cy="14" r="10" stroke="#3fb950" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="5" stroke="#3fb950" strokeWidth="1" />
      <ellipse cx="14" cy="14" rx="10" ry="4" stroke="#3fb950" strokeWidth="1.2" />
      <path d="M5 12 L9 14 L5 16" stroke="#3fb950" strokeWidth="1" fill="none" />
      <path d="M23 12 L19 14 L23 16" stroke="#3fb950" strokeWidth="1" fill="none" />
    </svg>
  );
}
