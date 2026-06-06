import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-12 border-t border-pidex-border">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-pidex-accent">&#9656;</span> {title}
      </h2>
      {children}
    </section>
  );
}
