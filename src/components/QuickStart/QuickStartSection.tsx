import Section from "@/components/Section";
import TerminalBlock from "./TerminalBlock";

export default function QuickStartSection() {
  const lines = [
    { type: "comment" as const, text: "# Install PiDex" },
    { type: "prompt" as const, text: "$ curl -sSL https://raw.githubusercontent.com/Shivamingale3/pi_dex/main/deploy/install.sh | sudo bash" },
    { type: "empty" as const },
    { type: "comment" as const, text: "# Configure your Telegram credentials" },
    { type: "prompt" as const, text: "$ sudo pidex setup" },
    { type: "empty" as const },
    { type: "comment" as const, text: "# Start the daemon" },
    { type: "prompt" as const, text: "$ sudo systemctl enable --now pidex" },
    { type: "empty" as const },
    { type: "comment" as const, text: "# (Optional) Get shutdown alerts too" },
    { type: "prompt" as const, text: "$ sudo systemctl enable pidex-shutdown" },
  ];

  return (
    <Section title="Quick Start">
      <TerminalBlock lines={lines} />
    </Section>
  );
}
