import { site } from "@/constants";
import Mascot from "@/icons/Mascot";
import Badges from "./Badges";
import InstallCommand from "./InstallCommand";

export default function HeroSection() {
  return (
    <section className="hero relative overflow-hidden pt-16 pb-12 px-5 text-center">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[480px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(63,185,80,0.06)_0%,transparent_70%)]" />
      <div className="relative">
        <Mascot size={100} className="mx-auto mb-6 block" />
        <h1 className="text-5xl font-bold bg-gradient-to-br from-pidex-text from-30% to-pidex-accent bg-clip-text text-transparent">
          {site.title}
        </h1>
        <p className="text-pidex-muted text-lg mt-2 mb-7">{site.tagline}</p>
        <InstallCommand />
        <Badges />
      </div>
    </section>
  );
}
