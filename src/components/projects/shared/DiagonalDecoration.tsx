/**
 * DiagonalDecoration Component
 *
 * Renders four diagonal gradient lines that animate on hover.
 * Each line has a staggered translate-y animation creating a wave effect.
 *
 * @example
 * ```tsx
 * <div className="group relative">
 *   <DiagonalDecoration />
 *   <div>Your content</div>
 * </div>
 * ```
 */

const LINE_BASE_CLASSES =
  "to-background border-primary/30 from-primary/40 via-primary/35 h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300";

export default function DiagonalDecoration() {
  return (
    <div
      className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]"
      aria-hidden="true"
    >
      {/* Line 1 - Smallest translation */}
      <div className={`${LINE_BASE_CLASSES} -ml-[4px] group-hover:-translate-y-1`} />

      {/* Line 2 */}
      <div className={`${LINE_BASE_CLASSES} -ml-[8px] group-hover:-translate-y-3`} />

      {/* Line 3 */}
      <div className={`${LINE_BASE_CLASSES} -ml-[12px] group-hover:-translate-y-5`} />

      {/* Line 4 - Largest translation */}
      <div className={`${LINE_BASE_CLASSES} -ml-[16px] group-hover:-translate-y-7`} />
    </div>
  );
}
