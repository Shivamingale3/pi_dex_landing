import { features } from "@/constants";
import Section from "@/components/Section";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <Section title="Features">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f) => (
          <FeatureCard key={f.label} label={f.label} desc={f.desc} />
        ))}
      </div>
    </Section>
  );
}
