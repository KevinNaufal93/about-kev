export type PipelineNode = {
  label: string;
  highlighted?: boolean;
};

export type CommentSection = {
  label: string;
  text: string;
  highlight?: boolean;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  featured?: boolean;
  pipeline?: PipelineNode[];
  sections?: CommentSection[];
  description?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "efms",
    name: "EFMS, real-time telemetry from vessels at sea",
    subtitle: "maritime iot platform · architected from scratch · saribautnet · 2025",
    featured: true,
    pipeline: [
      { label: "vessels" },
      { label: "gateway" },
      { label: "ingestion", highlighted: true },
      { label: "postgis", highlighted: true },
      { label: "event bus" },
      { label: "central app", highlighted: true },
    ],
    sections: [
      {
        label: "the problem",
        text: "Turn a per-second sensor stream into live fleet visibility: what's inside each vessel and where it's headed, viewable from shore. No system existed, so I designed it from the schema up.",
      },
      {
        label: "the hard part",
        text: "Per-second writes saturated the database and the VM would out-of-memory crash. I fixed it at the source, not with hardware: PostGIS indexing, batched writes, and a shore feed throttled a few seconds to drain the write pressure.",
      },
      {
        label: "the result",
        text: "From crashing under load to continuous, effectively zero-downtime operation on lighter resources. Stable enough to be the shore team's live window into the fleet.",
        highlight: true,
      },
    ],
    stack: ["NestJS", "PostgreSQL", "PostGIS", "Redis", "RabbitMQ", "ZeroMQ", "Go", "AWS"],
  },
  {
    id: "qinerja",
    name: "Qinerja",
    subtitle: "hris platform · sprout digital labs",
    description:
      "Geofenced clock-in: validates a device's location against the office radius before an attendance record is allowed to exist.",
    stack: ["NestJS", "PostgreSQL", "geofencing"],
  },
  {
    id: "titip-io",
    name: "Titip.io",
    subtitle: "lead backend · sprout digital labs",
    description:
      "Led backend and designed the core system flow end to end, owning the API contracts the rest of the team built against.",
    stack: ["Express", "REST", "SQL"],
  },
];
