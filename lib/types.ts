import type { ComponentType } from "react";

/**
 * Any icon component that accepts a `className`.
 * Covers both lucide-react icons and the local SVG brand marks.
 */
export type IconComponent = ComponentType<{ className?: string }>;
