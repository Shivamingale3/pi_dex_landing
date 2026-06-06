import { site } from "@/constants";

export default function InstallCommand() {
  return (
    <div className="inline-flex items-center gap-2 bg-pidex-card border border-pidex-border rounded-lg px-4 py-2.5 text-[13px] text-pidex-muted">
      <span className="text-pidex-accent">$</span>
      <code className="text-[13px]">{site.installScript}</code>
      <span className="text-pidex-muted">|</span>
    </div>
  );
}
