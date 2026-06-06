import type { Monitor, Feature, AlertSlide, Command } from "@/types";

export const monitors: Monitor[] = [
  { label: "SSH" },
  { label: "Sudo" },
  { label: "CPU" },
  { label: "RAM" },
  { label: "Disk" },
  { label: "Temperature" },
  { label: "Docker" },
  { label: "Systemd" },
  { label: "Network" },
  { label: "Reboot" },
  { label: "Shutdown" },
  { label: "Self-Update" },
];

export const features: Feature[] = [
  {
    label: "Single Go binary",
    desc: "Under 5 MB. No runtime, no Python, no Node.js. Ships as a statically-linked executable.",
  },
  {
    label: "Self-updating",
    desc: "<code>sudo pidex update</code> — pulls the latest release from GitHub. One command, restarts itself.",
  },
  {
    label: "Interactive setup wizard",
    desc: "<code>sudo pidex setup</code> walks you through credentials, toggles, thresholds, and intervals.",
  },
  {
    label: "Pre-built binaries",
    desc: "amd64 and arm64 releases on every tag. The install script downloads them — no Go required.",
  },
  {
    label: "Zero external dependencies",
    desc: "Talks to systemd journal, /proc, Docker socket, and Telegram API directly. No agents, no daemons, no SDKs.",
  },
  {
    label: "Data stays on your server",
    desc: "All logs, thresholds, and event processing happen locally. Only the notification text leaves your machine.",
  },
];

export const alerts: AlertSlide[] = [
  {
    emoji: "\u2139\uFE0F",
    header: "INFO | SSH Login",
    severity: "info",
    body: "shiv logged in from 192.168.1.100",
    server: "home",
    source: "ssh",
    time: "2026-06-06 11:20:47",
  },
  {
    emoji: "\u26A0\uFE0F",
    header: "WARNING | CPU Warn",
    severity: "warning",
    body: "CPU usage at 87.3% (warn=80%, crit=95%)",
    server: "home",
    source: "cpu",
    time: "2026-06-06 14:32:10",
  },
  {
    emoji: "\u2139\uFE0F",
    header: "INFO | Sudo Used",
    severity: "info",
    body: "shiv ran sudo apt update",
    server: "home",
    source: "sudo",
    time: "2026-06-06 11:45:02",
  },
];

export const commands: Command[] = [
  { command: "pidex run", desc: "Start the daemon (runs as pidex user via systemd)" },
  { command: "pidex setup", desc: "Interactive configuration wizard (9 settings)" },
  { command: "pidex test <event>", desc: "Send a test notification — ssh-login, ssh-fail, sudo-used, docker-down, reboot" },
  { command: "pidex test <event> --dry-run", desc: "Print event without sending to Telegram" },
  { command: "pidex update", desc: "Check GitHub for the latest release and self-update" },
  { command: "pidex uninstall", desc: "Remove PiDex, systemd services, and config" },
  { command: "pidex version", desc: "Show installed version" },
  { command: "pidex help", desc: "Show usage" },
];

export const site = {
  title: "PiDex",
  tagline: "Home Server Watchman",
  version: "v1.2.5",
  github: "https://github.com/Shivamingale3/pi_dex",
  installScript:
    "curl -sSL https://raw.githubusercontent.com/Shivamingale3/pi_dex/main/deploy/install.sh | sudo bash",
  badges: [
    { src: "https://img.shields.io/badge/version-v1.2.5-3fb950", alt: "version" },
    { src: "https://img.shields.io/badge/go-1.22+-00add8?logo=go", alt: "go" },
    { src: "https://img.shields.io/badge/license-MIT-blue", alt: "license" },
    { src: "https://img.shields.io/badge/arch-amd64%20|%20arm64-8b949e", alt: "arch" },
  ],
};
