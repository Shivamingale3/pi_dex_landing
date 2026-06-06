interface IconProps {
  size?: number;
  className?: string;
}

export default function IconReboot({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M14 5 C9 5,5 9,5 14 C5 19,9 23,14 23"
        stroke="#3fb950"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 5 L18 5 L18 9"
        stroke="#3fb950"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polygon points="12,12 18,14 12,16" fill="#3fb950" />
    </svg>
  );
}
