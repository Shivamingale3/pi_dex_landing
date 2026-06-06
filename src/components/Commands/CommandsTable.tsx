import type { Command } from "@/types";

interface CommandsTableProps {
  commands: Command[];
}

export default function CommandsTable({ commands }: CommandsTableProps) {
  return (
    <div className="bg-pidex-card border border-pidex-border rounded-lg overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-pidex-card px-4 py-3 text-left text-xs text-pidex-muted uppercase tracking-[0.5px]">
              Command
            </th>
            <th className="bg-pidex-card px-4 py-3 text-left text-xs text-pidex-muted uppercase tracking-[0.5px]">
              What it does
            </th>
          </tr>
        </thead>
        <tbody>
          {commands.map((cmd) => (
            <tr key={cmd.command}>
              <td className="px-4 py-2.5 text-[13px] font-bold text-pidex-accent border-t border-pidex-border">
                {cmd.command}
              </td>
              <td className="px-4 py-2.5 text-[13px] text-pidex-muted border-t border-pidex-border">
                {cmd.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
