import { Fragment } from "react";

import type { PipelineNode } from "@/lib/projects";

type PipelineFlowProps = {
  nodes: PipelineNode[];
};

export function PipelineFlow({ nodes }: PipelineFlowProps) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {nodes.map((node, i) => (
        <Fragment key={node.label}>
          <span
            className={`rounded border px-2 py-0.5 font-mono text-xs transition-colors ${
              node.highlighted
                ? "border-brand/50 bg-brand/10 text-brand"
                : "border-border text-muted"
            }`}
          >
            {node.label}
          </span>
          {i < nodes.length - 1 && (
            <span className="text-xs text-muted">→</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
