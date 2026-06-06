import { site } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-pidex-border py-8 text-center text-pidex-muted text-xs">
      <a href={site.github} className="text-pidex-muted hover:text-pidex-text">
        GitHub
      </a>
      <span className="mx-2">|</span>
      <span>MIT License</span>
      <span className="mx-2">|</span>
      <span>Built with Go &bull; {site.version}</span>
    </footer>
  );
}
