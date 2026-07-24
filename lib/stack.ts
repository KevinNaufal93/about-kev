import type { ComponentType, CSSProperties } from "react";
import {
  SiExpress,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiSharp,
  SiTypescript,
} from "react-icons/si";

import { ZeroMqIcon } from "@/components/brand-icons";

export type Stack = {
  name: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

export const stacks: Stack[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript,  color: "#3178C6" },
  { name: "React",      icon: SiReact,       color: "#61DAFB" },
  { name: "Next.js",   icon: SiNextdotjs,   color: "#ffffff" },
  { name: "Node.js",   icon: SiNodedotjs,   color: "#5FA04E" },
  { name: "Express",   icon: SiExpress,     color: "#cccccc" },
  { name: "NestJS",    icon: SiNestjs,      color: "#E0234E" },
  { name: "Go",        icon: SiGo,          color: "#00ADD8" },
  { name: "C#",        icon: SiSharp,       color: "#9B4F96" },
  { name: "MongoDB",   icon: SiMongodb,     color: "#47A248" },
  { name: "PostgreSQL",icon: SiPostgresql,  color: "#4169E1" },
  { name: "RabbitMQ",  icon: SiRabbitmq,    color: "#FF6600" },
  { name: "ZeroMQ",    icon: ZeroMqIcon,    color: "#DF0000" },
];
