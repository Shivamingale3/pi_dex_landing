import { monitors } from "@/constants";
import type { Monitor } from "@/types";
import IconSsh from "@/icons/IconSsh";
import IconSudo from "@/icons/IconSudo";
import IconCpu from "@/icons/IconCpu";
import IconRam from "@/icons/IconRam";
import IconDisk from "@/icons/IconDisk";
import IconTemperature from "@/icons/IconTemperature";
import IconDocker from "@/icons/IconDocker";
import IconSystemd from "@/icons/IconSystemd";
import IconNetwork from "@/icons/IconNetwork";
import IconReboot from "@/icons/IconReboot";
import IconShutdown from "@/icons/IconShutdown";
import IconSelfUpdate from "@/icons/IconSelfUpdate";
import Section from "@/components/Section";
import MonitorCard from "./MonitorCard";

const iconComponents: Record<string, React.ComponentType<{ size?: number }>> = {
  SSH: IconSsh,
  Sudo: IconSudo,
  CPU: IconCpu,
  RAM: IconRam,
  Disk: IconDisk,
  Temperature: IconTemperature,
  Docker: IconDocker,
  Systemd: IconSystemd,
  Network: IconNetwork,
  Reboot: IconReboot,
  Shutdown: IconShutdown,
  "Self-Update": IconSelfUpdate,
};

export default function MonitorsSection() {
  return (
    <Section title="What PiDex Watches">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
        {monitors.map((m: Monitor) => {
          const Icon = iconComponents[m.label];
          return <MonitorCard key={m.label} label={m.label} icon={<Icon size={28} />} />;
        })}
      </div>
    </Section>
  );
}
