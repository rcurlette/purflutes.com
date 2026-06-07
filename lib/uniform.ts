import { UniformClient, UniformCompositionPageResponse } from "@uniformdev/canvas";

if (!process.env.UNIFORM_API_KEY) {
  throw new Error("UNIFORM_API_KEY environment variable is not set");
}

if (!process.env.UNIFORM_PROJECT_ID) {
  throw new Error("UNIFORM_PROJECT_ID environment variable is not set");
}

export const uniformClient = new UniformClient({
  apiKey: process.env.UNIFORM_API_KEY,
  projectId: process.env.UNIFORM_PROJECT_ID,
});

/**
 * Fetch a Uniform composition by slug
 */
export async function getCompositionBySlug(
  slug: string
): Promise<UniformCompositionPageResponse | null> {
  try {
    const composition = await uniformClient.getCompositionBySlug({
      slug,
    });
    return composition;
  } catch (error) {
    console.error(`[Uniform] Error fetching composition ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch a Uniform entry by ID or slug
 */
export async function getEntryBySlug(
  slug: string,
  type?: string
): Promise<any | null> {
  try {
    const entry = await uniformClient.getContentItem({
      id: slug,
    });
    return entry;
  } catch (error) {
    console.error(`[Uniform] Error fetching entry ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch multiple entries of a specific type
 */
export async function getEntriesByType(type: string): Promise<any[]> {
  try {
    const entries = await uniformClient.listContentItems({
      types: [type],
    });
    return entries.items || [];
  } catch (error) {
    console.error(`[Uniform] Error fetching entries of type ${type}:`, error);
    return [];
  }
}
