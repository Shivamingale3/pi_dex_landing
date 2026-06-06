interface TerminalLine {
  type: "comment" | "prompt" | "empty";
  text?: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
}

export default function TerminalBlock({ lines }: TerminalBlockProps) {
  return (
    <div className="bg-pidex-terminal border border-pidex-border rounded-lg overflow-hidden">
      <div className="bg-pidex-card px-3.5 py-2 flex gap-1.5 border-b border-pidex-border">
        <span className="block w-2.5 h-2.5 rounded-full bg-pidex-danger" />
        <span className="block w-2.5 h-2.5 rounded-full bg-pidex-warn" />
        <span className="block w-2.5 h-2.5 rounded-full bg-pidex-accent" />
      </div>
      <pre className="px-5 py-[18px] text-[13px] leading-[1.7] overflow-x-auto text-pidex-text">
        {lines.map((line, i) => {
          if (line.type === "empty") {
            return <span key={i}>{"\n"}</span>;
          }
          if (line.type === "comment") {
            return (
              <span key={i} className="text-pidex-muted">
                {line.text}
                {"\n"}
              </span>
            );
          }
          if (!line.text) return <span key={i}>{"\n"}</span>;
          const firstSpace = line.text.indexOf(" ");
          const prompt = line.text.slice(0, firstSpace);
          const rest = line.text.slice(firstSpace);
          return (
            <span key={i}>
              <span className="text-pidex-accent">{prompt}</span>
              <span>{rest}</span>
              {"\n"}
            </span>
          );
        })}
      </pre>
    </div>
  );
}
