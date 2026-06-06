import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[760px] mx-auto px-5">{children}</div>;
}
