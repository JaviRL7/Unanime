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

const CORNER_BASE_CLASSES = "border-foreground/20 absolute border-2 transition-all";

const CORNER_SIZES: Record<CornerSize, string> = {
  small: "h-8 w-8",
  medium: "h-12 w-12",
  large: "h-16 w-16",
};

const HOVER_POSITIONS = {
  topLeft: {
    base: "-top-2 -left-2",
    hover: "group-hover:-top-3 group-hover:-left-3",
    hoverLarge: "group-hover:-top-4 group-hover:-left-4",
  },
  topRight: {
    base: "-top-2 -right-2",
    hover: "group-hover:-top-3 group-hover:-right-3",
    hoverLarge: "group-hover:-top-4 group-hover:-right-4",
  },
  bottomLeft: {
    base: "-bottom-2 -left-2",
    hover: "group-hover:-bottom-3 group-hover:-left-3",
    hoverLarge: "group-hover:-bottom-4 group-hover:-left-4",
  },
  bottomRight: {
    base: "-bottom-2 -right-2",
    hover: "group-hover:-bottom-3 group-hover:-right-3",
    hoverLarge: "group-hover:-bottom-4 group-hover:-right-4",
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
          "border-t-2 border-l-2",
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
          "border-t-2 border-r-2",
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
          "border-b-2 border-l-2",
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
          "border-r-2 border-b-2",
          HOVER_POSITIONS.bottomRight.base,
          hoverExpand && (useHoverLarge ? HOVER_POSITIONS.bottomRight.hoverLarge : HOVER_POSITIONS.bottomRight.hover)
        )}
        aria-hidden="true"
      />
    </>
  );
}
