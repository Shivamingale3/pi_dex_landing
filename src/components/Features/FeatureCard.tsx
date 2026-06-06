import IconCheck from "@/icons/IconCheck";

interface FeatureCardProps {
  label: string;
  desc: string;
}

export default function FeatureCard({ label, desc }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-3 bg-pidex-card border border-pidex-border rounded-lg p-[18px_16px]">
      <div className="shrink-0 mt-0.5">
        <IconCheck size={18} />
      </div>
      <div className="text-[13px]">
        <div className="font-bold text-pidex-text">{label}</div>
        <div
          className="text-pidex-muted mt-0.5"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  );
}
