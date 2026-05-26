import dynamic from "next/dynamic";

// Map Uniform component IDs to React components
// These are async-loaded for better performance

export const componentMapping = {
  // Layout components
  hero: dynamic(() => import("@/components/uniform/hero")),
  mantrasRow: dynamic(() => import("@/components/uniform/mantras-row")),
  sectionHeader: dynamic(() => import("@/components/uniform/section-header")),
  richContent: dynamic(() => import("@/components/uniform/rich-content")),

  // Data-driven components
  fluteGrid: dynamic(() => import("@/components/uniform/flute-grid")),
  videoGrid: dynamic(() => import("@/components/uniform/video-grid")),
  partnerGrid: dynamic(() => import("@/components/uniform/partner-grid")),
  eventList: dynamic(() => import("@/components/uniform/event-list")),

  // Detail components
  fluteDetail: dynamic(() => import("@/components/uniform/flute-detail")),

  // Forms
  signupForm: dynamic(() => import("@/components/uniform/signup-form")),

  // Layout variations
  imageTwoColumn: dynamic(
    () => import("@/components/uniform/image-two-column")
  ),
} as const;

export type UniformComponentType = keyof typeof componentMapping;

/**
 * Get a React component by Uniform component ID
 */
export function getComponent(componentId: string) {
  const component = componentMapping[componentId as UniformComponentType];
  if (!component) {
    console.warn(
      `[Uniform] Component "${componentId}" not found in mapping, using fallback`
    );
    return null;
  }
  return component;
}
