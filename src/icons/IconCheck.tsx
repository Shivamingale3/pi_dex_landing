interface IconProps {
  size?: number;
  className?: string;
}

export default function IconCheck({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <circle cx="9" cy="9" r="8" stroke="#3fb950" strokeWidth="1.5" />
      <path
        d="M5 9 L8 12 L13 6"
        stroke="#3fb950"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
