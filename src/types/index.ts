export interface Monitor {
  label: string;
}

export interface Feature {
  label: string;
  desc: string;
}

export interface AlertSlide {
  emoji: string;
  header: string;
  severity: "info" | "warning";
  body: string;
  server: string;
  source: string;
  time: string;
}

export interface Command {
  command: string;
  desc: string;
}
