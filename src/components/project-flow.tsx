import type { ProjectVisualKind } from "../../content/projects/types";

type Props = { kind: ProjectVisualKind; steps: string[]; label: string };

function Node({ text, emphasis = false }: { text: string; emphasis?: boolean }) {
  return <span className={emphasis ? "flow-node flow-node--emphasis" : "flow-node"}>{text}</span>;
}

export function ProjectFlow({ kind, steps, label }: Props) {
  const description = kind === "health"
    ? `${steps.slice(0, 3).join(", ")} → ${steps.slice(3).join(" → ")}`
    : kind === "agent"
      ? `${steps.slice(0, 3).join(" → ")} → ${steps[3]} / ${steps[4]} → ${steps[5]}`
      : steps.join(" → ");
  return (
    <div className={`project-flow project-flow--${kind}`} role="img" aria-label={`${label}: ${description}`}>
      {kind === "commerce" && (
        <div className="flow-sequence" aria-hidden="true">
          {steps.map((step, index) => <Node key={step} text={step} emphasis={index === 2 || index === 3} />)}
        </div>
      )}
      {kind === "health" && (
        <div className="flow-health" aria-hidden="true">
          <div className="flow-sources">{steps.slice(0, 3).map((step) => <Node key={step} text={step} />)}</div>
          <div className="flow-health-spine">{steps.slice(3).map((step, index) => <Node key={step} text={step} emphasis={index === 1 || index === 2} />)}</div>
        </div>
      )}
      {kind === "agent" && (
        <div className="flow-agent" aria-hidden="true">
          <div className="flow-agent-entry">{steps.slice(0, 3).map((step, index) => <Node key={step} text={step} emphasis={index === 2} />)}</div>
          <div className="flow-agent-branches"><Node text={steps[3]} /><Node text={steps[4]} /></div>
          <div className="flow-agent-store"><Node text={steps[5]} /></div>
        </div>
      )}
    </div>
  );
}
