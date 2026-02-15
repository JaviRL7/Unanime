/**
 * DecorativeCorners Component
 *
 * Renders four decorative corner frames around content that expand on hover.
 * Used for images, videos, and other media elements to add visual interest.
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <DecorativeCorners size="medium" hoverExpand />
 *   <img src="..." alt="..." />
 * </div>
 * ```
 */

import { cn } from "@/lib/utils";
import type { DecorativeCornersProps, CornerSize } from "@/types/projects";

const CORNER_BASE_CLASSES = "border-foreground/20 absolute border transition-all";

const CORNER_SIZES: Record<CornerSize, string> = {
  small: "h-6 w-6",
  medium: "h-10 w-10",
  large: "h-14 w-14",
};

const HOVER_POSITIONS = {
  topLeft: {
    base: "-top-1.5 -left-1.5",
    hover: "group-hover:-top-2 group-hover:-left-2",
    hoverLarge: "group-hover:-top-2.5 group-hover:-left-2.5",
  },
  topRight: {
    base: "-top-1.5 -right-1.5",
    hover: "group-hover:-top-2 group-hover:-right-2",
    hoverLarge: "group-hover:-top-2.5 group-hover:-right-2.5",
  },
  bottomLeft: {
    base: "-bottom-1.5 -left-1.5",
    hover: "group-hover:-bottom-2 group-hover:-left-2",
    hoverLarge: "group-hover:-bottom-2.5 group-hover:-left-2.5",
  },
  bottomRight: {
    base: "-bottom-1.5 -right-1.5",
    hover: "group-hover:-bottom-2 group-hover:-right-2",
    hoverLarge: "group-hover:-bottom-2.5 group-hover:-right-2.5",
  },
};

export default function DecorativeCorners({
  size = "small",
  hoverExpand = true,
}: DecorativeCornersProps) {
  const sizeClasses = CORNER_SIZES[size];
  const useHoverLarge = size === "medium" || size === "large";

  return (
    <>
      {/* Top Left Corner */}
      <div
        className={cn(
          CORNER_BASE_CLASSES,
          sizeClasses,
          "border-t border-l",
          HOVER_POSITIONS.topLeft.base,
          hoverExpand && (useHoverLarge ? HOVER_POSITIONS.topLeft.hoverLarge : HOVER_POSITIONS.topLeft.hover)
        )}
        aria-hidden="true"
      />

      {/* Top Right Corner */}
      <div
        className={cn(
          CORNER_BASE_CLASSES,
          sizeClasses,
          "border-t border-r",
          HOVER_POSITIONS.topRight.base,
          hoverExpand && (useHoverLarge ? HOVER_POSITIONS.topRight.hoverLarge : HOVER_POSITIONS.topRight.hover)
        )}
        aria-hidden="true"
      />

      {/* Bottom Left Corner */}
      <div
        className={cn(
          CORNER_BASE_CLASSES,
          sizeClasses,
          "border-b border-l",
          HOVER_POSITIONS.bottomLeft.base,
          hoverExpand && (useHoverLarge ? HOVER_POSITIONS.bottomLeft.hoverLarge : HOVER_POSITIONS.bottomLeft.hover)
        )}
        aria-hidden="true"
      />

      {/* Bottom Right Corner */}
      <div
        className={cn(
          CORNER_BASE_CLASSES,
          sizeClasses,
          "border-r border-b",
          HOVER_POSITIONS.bottomRight.base,
          hoverExpand && (useHoverLarge ? HOVER_POSITIONS.bottomRight.hoverLarge : HOVER_POSITIONS.bottomRight.hover)
        )}
        aria-hidden="true"
      />
    </>
  );
}
