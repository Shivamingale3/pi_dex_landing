interface IconProps {
  size?: number;
  className?: string;
}

export default function IconSystemd({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <circle cx="14" cy="14" r="9" stroke="#3fb950" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="4" stroke="#3fb950" strokeWidth="1.2" />
      <path d="M14 5 V9 M14 19 V23 M5 14 H9 M19 14 H23" stroke="#3fb950" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
