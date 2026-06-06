import type { AlertSlide as AlertSlideType } from "@/types";

interface AlertSlideProps {
  alert: AlertSlideType;
  footer: string;
}

export default function AlertSlide({ alert, footer }: AlertSlideProps) {
  const headerColor =
    alert.severity === "info" ? "text-pidex-accent" : "text-pidex-warn";

  return (
    <div className="max-w-[380px]">
      <div className="text-[15px] font-bold mb-1.5">
        {alert.emoji} <span className={headerColor}>{alert.header}</span>
      </div>
      <div className="text-pidex-text text-sm mb-2.5">{alert.body}</div>
      <div className="text-pidex-muted text-xs leading-relaxed">
        <div>Server&nbsp;&nbsp;&nbsp;&nbsp;{alert.server}</div>
        <div>Source&nbsp;&nbsp;&nbsp;&nbsp;{alert.source}</div>
        <div>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{alert.time}</div>
      </div>
      <div className="text-pidex-muted text-xs mt-2 border-t border-pidex-border pt-2">
        {footer}
      </div>
    </div>
  );
}
