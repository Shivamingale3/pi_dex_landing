import type { ReactNode } from "react";

interface MonitorCardProps {
  label: string;
  icon: ReactNode;
}

export default function MonitorCard({ label, icon }: MonitorCardProps) {
  return (
    <div className="bg-pidex-card border border-pidex-border rounded-lg py-5 px-3 text-center transition-colors duration-200 hover:border-pidex-accent">
      <div className="flex justify-center mb-2.5">{icon}</div>
      <span className="text-xs text-pidex-muted">{label}</span>
    </div>
  );
}
