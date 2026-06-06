interface IconProps {
  size?: number;
  className?: string;
}

export default function IconSudo({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M14 3 L22 8 L22 16 C22 20.5 18.5 24 14 25 C9.5 24 6 20.5 6 16 V8 Z"
        stroke="#3fb950"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 13 L13 16 L18 10"
        stroke="#3fb950"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
