interface IconProps {
  size?: number;
  className?: string;
}

export default function IconDisk({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <circle cx="14" cy="14" r="10" stroke="#3fb950" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="4" stroke="#3fb950" strokeWidth="1" />
      <circle cx="14" cy="14" r="1.5" fill="#3fb950" />
    </svg>
  );
}
