/**
 * StatusBadge Component
 *
 * Displays project date and status with an animated indicator dot.
 * Different colors for different statuses:
 * - Featured: Blue
 * - Completed: Green
 * - In Progress: Yellow
 *
 * @example
 * ```tsx
 * <StatusBadge status="completed" date="Ene, 2025" />
 * ```
 */

import { cn } from "@/lib/utils";
import type { StatusBadgeProps } from "@/types/projects";

const STATUS_CONFIG = {
  featured: {
    dotColor: "bg-blue-500",
    label: "destacado",
  },
  completed: {
    dotColor: "bg-green-500",
    label: "completado",
  },
  "in-progress": {
    dotColor: "bg-yellow-500",
    label: "en desarrollo",
  },
};

export default function StatusBadge({ status, date }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      {/* Date */}
      <time className="text-muted-foreground font-mono text-xs">{date}</time>

      {/* Separator */}
      <div className="bg-border h-4 w-px" aria-hidden="true" />

      {/* Status indicator */}
      <div className="inline-flex items-center gap-1.5">
        {/* Animated dot */}
        <div
          className={cn("h-2 w-2 rounded-full animate-pulse", config.dotColor)}
          aria-hidden="true"
        />

        {/* Status label */}
        <span className="text-muted-foreground font-mono text-xs uppercase">
          {config.label}
        </span>
      </div>
    </div>
  );
}
