interface IconProps {
  size?: number;
  className?: string;
}

export default function IconShutdown({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path d="M14 3 V14" stroke="#3fb950" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M18.5 6.5 C22 8.5,24 12,24 16 C24 21.5,19.5 25,14 25 C8.5 25,4 21.5,4 16 C4 12,6 8.5,9.5 6.5"
        stroke="#3fb950"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
