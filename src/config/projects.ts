/**
 * Project Configuration
 *
 * Centralized configuration for project IDs, labels, and special layouts.
 * This improves maintainability by keeping all project-related constants in one place.
 */

/**
 * Project IDs
 */
export const PROJECT_IDS = {
  DONA_ARANA: "dona-arana",
  CONTABILIDAD_WEB: "contabilidad-web",
  LINKEDIN_STATS: "linkedin-stats",
  MORE_FEATURES: "more-features",
  LOCAL_NOISE: "local-noise",
  EXTRA_TFG: "extra-tfg",
} as const;

/**
 * Project number mapping
 */
export const PROJECT_NUMBER_MAP: Record<string, number> = {
  [PROJECT_IDS.DONA_ARANA]: 1,
  [PROJECT_IDS.CONTABILIDAD_WEB]: 2,
  [PROJECT_IDS.LINKEDIN_STATS]: 2,
  [PROJECT_IDS.MORE_FEATURES]: 2,
  [PROJECT_IDS.LOCAL_NOISE]: 3,
  [PROJECT_IDS.EXTRA_TFG]: 4,
  "tfg-arquitectura": 4,
  "tfg-diagrama": 4,
};

/**
 * Projects that use the special gallery/cart layout
 * (similar to dona-arana structure)
 */
export const PROJECTS_WITH_SPECIAL_LAYOUTS: readonly string[] = [
  PROJECT_IDS.DONA_ARANA,
  PROJECT_IDS.LOCAL_NOISE,
];

/**
 * Get project label for display
 * @param projectId - The project identifier
 * @param projectWord - Translated word for "Project" (default "Proyecto")
 */
export function getProjectLabel(projectId: string, projectWord: string = "Proyecto"): string {
  const projectNumber = PROJECT_NUMBER_MAP[projectId];
  if (!projectNumber) return "";

  return `${projectWord} ${projectNumber}`;
}
