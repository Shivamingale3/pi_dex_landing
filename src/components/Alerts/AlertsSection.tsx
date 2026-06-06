import { site, alerts } from "@/constants";
import Section from "@/components/Section";
import AlertSlide from "./AlertSlide";

export default function AlertsSection() {
  return (
    <Section title="Alerts on Telegram">
      <div className="relative overflow-hidden rounded-lg bg-pidex-card border border-pidex-border">
        <div className="flex w-[300%] animate-slide">
          {alerts.map((slide) => (
            <div key={slide.header} className="w-1/3 shrink-0 px-6 py-7">
              <AlertSlide alert={slide} footer={`— ${site.title} ${site.version}`} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
