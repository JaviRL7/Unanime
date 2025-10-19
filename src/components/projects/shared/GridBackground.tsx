/**
 * GridBackground Component
 *
 * Renders a cross pattern background using CSS pseudo-elements.
 * Creates horizontal and vertical lines that intersect in the middle.
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <GridBackground />
 *   <div>Your content here</div>
 * </div>
 * ```
 */

export default function GridBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
    </div>
  );
}
