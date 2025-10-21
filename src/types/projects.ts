/**
 * Types and interfaces for the Projects section
 *
 * This file contains all TypeScript definitions for project data structures,
 * ensuring type safety across the entire projects feature.
 */

/**
 * Status types for projects
 * - featured: Highlighted/showcase project
 * - completed: Finished project
 * - in-progress: Currently being developed
 */
export type ProjectStatus = "featured" | "completed" | "in-progress";

/**
 * Media types supported for project display
 */
export type MediaType = "video" | "image";

/**
 * Size variants for decorative elements
 */
export type CornerSize = "small" | "medium" | "large";

/**
 * Badge configuration for project tags
 */
export interface Badge {
  text: string;
  color: string;
}

/**
 * Project Hero section data
 * Represents the full-screen hero section at the top of each project
 */
export interface ProjectHero {
  /** Project title displayed in hero */
  title: string;
  /** Project date (e.g., "Ene, 2025") */
  date: string;
  /** Current status of the project */
  status: ProjectStatus;
  /** Main description text */
  description: string;
  /** Type of media to display */
  mediaType: MediaType;
  /** Path to media file (video or image) - undefined for blueprint pattern */
  mediaSrc: string | undefined;
  /** Array of badge tags */
  badges: Badge[];
  /** GitHub repository URL (optional) */
  githubUrl?: string;
  /** Live demo URL (optional) */
  demoUrl?: string;
}

/**
 * Project Detail Row data
 * Represents a 50vh row with media on left and content on right
 */
export interface ProjectDetail {
  /** Project date */
  date: string;
  /** Current status */
  status: ProjectStatus;
  /** Main title for this detail section */
  title: string;
  /** Subtitle/category text */
  subtitle: string;
  /** Type of media */
  mediaType: MediaType;
  /** Path to media file */
  mediaSrc: string;
  /** Main description paragraph */
  description: string;
  /** Title for the system/feature section */
  systemTitle: string;
  /** Description of the system/feature */
  systemDescription: string;
  /** Array of feature bullet points */
  features: string[];
  /** Inspirational quote or tagline */
  quote: string;
  /** GitHub URL (optional) */
  githubUrl?: string;
  /** Demo URL (optional) */
  demoUrl?: string;
  /** Optional badges for this section */
  badges?: Badge[];
}

/**
 * Complete Project data structure
 * Contains hero section and array of detail rows
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Hero section configuration */
  hero: ProjectHero;
  /** Array of detail rows (typically 2 rows per project) */
  details: ProjectDetail[];
}

/**
 * Props for DecorativeCorners component
 */
export interface DecorativeCornersProps {
  /** Size variant for corner decorations */
  size?: CornerSize;
  /** Whether corners should expand on hover */
  hoverExpand?: boolean;
}

/**
 * Props for StatusBadge component
 */
export interface StatusBadgeProps {
  /** Project status */
  status: ProjectStatus;
  /** Project date */
  date: string;
}

/**
 * Props for ProjectHero component
 */
export interface ProjectHeroProps {
  /** Hero section data */
  hero: ProjectHero;
  /** Optional logo SVG to display (for first project) */
  showLogo?: boolean;
  /** Project number (1, 2, 3, etc.) */
  projectNumber?: number;
  /** Project ID for conditional rendering */
  projectId: string;
}

/**
 * Props for ProjectDetailRow component
 */
export interface ProjectDetailRowProps {
  /** Detail row data */
  detail: ProjectDetail;
  /** Row index for special layouts (0 = Gallery, 1 = Cart) */
  index: number;
  /** Project ID for conditional rendering */
  projectId: string;
  /** Whether to show action buttons (only first row) */
  showActionButtons?: boolean;
}
