import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section title="About the Author">
      <div className="bg-pidex-card border border-pidex-border rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-4 text-[13px]">
        <div className="flex-1">
          <div className="font-bold text-base text-pidex-text">Shivam Ingale</div>
          <div className="text-pidex-muted mt-0.5">Full Stack Engineer &bull; India</div>
          <div className="text-pidex-muted mt-2 leading-relaxed">
            Building tools that solve real infrastructure problems. Author of PiDex,
            Cloudlet, Cosmic Timer, ProcPipe, and more. Currently at Leadows
            Technologies.
          </div>
        </div>
        <div className="flex flex-col gap-1.5 shrink-0 text-pidex-muted">
          <a
            href="https://www.shivamingale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pidex-text transition-colors"
          >
            shivamingale.com
          </a>
          <a
            href="mailto:shivamingale3@gmail.com"
            className="hover:text-pidex-text transition-colors"
          >
            shivamingale3@gmail.com
          </a>
        </div>
      </div>
    </Section>
  );
}
