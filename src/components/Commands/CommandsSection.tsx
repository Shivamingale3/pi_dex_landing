import { commands } from "@/constants";
import Section from "@/components/Section";
import CommandsTable from "./CommandsTable";

export default function CommandsSection() {
  return (
    <Section title="Commands">
      <CommandsTable commands={commands} />
    </Section>
  );
}
