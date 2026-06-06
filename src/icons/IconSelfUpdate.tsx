interface IconProps {
  size?: number;
  className?: string;
}

export default function IconSelfUpdate({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M14 5 V10 L17 7"
        stroke="#3fb950"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 23 V18 L11 21"
        stroke="#3fb950"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M8 8 L12 12" stroke="#3fb950" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="16" y="16" width="4" height="4" rx="1" stroke="#3fb950" strokeWidth="1.4" />
    </svg>
  );
}
