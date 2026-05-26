/**
 * Example: How to update a page to use Uniform
 * 
 * This file demonstrates how to convert the current hardcoded home page
 * to render from Uniform instead. This is a template you can follow for
 * other pages (about, shop, etc.).
 * 
 * To use this approach:
 * 1. Create a composition in Uniform with slug "home"
 * 2. Add components to the composition in Uniform Canvas
 * 3. Replace your current page.tsx with this code
 * 4. Update the slug to match your composition
 */

import { Suspense } from "react"
import { getCompositionBySlug } from "@/lib/uniform"
import { UniformComposition } from "@/components/uniform/composition-renderer"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

/**
 * Metadata for SEO
 */
export const metadata = {
  title: "PūR Flutes | Handcrafted Native American Style Flutes",
  description:
    "Handcrafted Native American style flutes for meditation, breathwork, and ceremony. Each instrument is shaped by hand in the Bulgarian Rhodope mountains.",
}

/**
 * Fallback component when composition is not found
 * This ensures graceful degradation
 */
function CompositionFallback() {
  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The requested page composition could not be loaded from Uniform.
      </p>
      <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
        Return to home
      </a>
    </div>
  )
}

/**
 * Page component that fetches and renders Uniform composition
 */
export default async function HomePage() {
  // Fetch the composition from Uniform
  // The slug "home" should match the composition slug in Uniform
  const composition = await getCompositionBySlug("home")

  return (
    <>
      {/* Header and footer remain as code - not Uniform-controlled */}
      <SiteHeader />

      {/* Main content is driven by Uniform */}
      <main className="flex-1">
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <UniformComposition
            composition={composition}
            fallback={<CompositionFallback />}
          />
        </Suspense>
      </main>

      {/* Footer remains as code */}
      <SiteFooter />
    </>
  )
}

/**
 * HOW TO CREATE A UNIFORM COMPOSITION
 *
 * 1. Go to https://uniform.app/projects/f12159e9-30b7-4142-974d-4d4020482983
 * 2. Click "Create Composition"
 * 3. Set Name: "Home Page"
 * 4. Set Slug: "home"
 * 5. Choose a composition type (page)
 * 6. Click "Add to composition"
 * 7. Add these components in order:
 *    - Hero (with tagline, heading, description, background image, buttons)
 *    - Mantras Row (with three mantras)
 *    - Section Header (label: "The Flutes", title: "Each one is hand-shaped...")
 *    - Flute Grid (reference to flute entries)
 *    - Image Two Column (workshop and playing images with captions)
 *    - Section Header (label: "The Makers", title: "Two hands, two mountains...")
 *    - Rich Content (about the makers)
 *    - Signup Form (heading, description)
 * 8. Configure each component with the appropriate values
 * 9. Click "Publish"
 * 10. Update app/page.tsx with this code
 *
 * HOW TO UPDATE EXISTING PAGES
 *
 * For /about, /shop, /gallery, /videos, etc., follow the same pattern:
 *
 * 1. Create a new composition with the appropriate slug
 * 2. Add components matching the current page layout
 * 3. Update app/[route]/page.tsx to fetch from Uniform
 * 4. Test the page renders correctly
 *
 * COMPONENT MAPPING
 *
 * Uniform Component → React Component (in components/uniform/)
 * - hero → hero.tsx
 * - mantrasRow → mantras-row.tsx
 * - sectionHeader → section-header.tsx
 * - richContent → rich-content.tsx
 * - imageTwoColumn → image-two-column.tsx
 * - fluteGrid → flute-grid.tsx
 * - videoGrid → video-grid.tsx
 * - partnerGrid → partner-grid.tsx
 * - eventList → event-list.tsx
 * - fluteDetail → flute-detail.tsx
 * - signupForm → signup-form.tsx
 *
 * FALLBACK STRATEGY
 *
 * If a composition is not found (null), the UniformComposition component
 * displays the fallback. This prevents 500 errors and allows graceful
 * degradation while you're setting up compositions.
 *
 * TROUBLESHOOTING
 *
 * - If page shows "Composition not found":
 *   1. Check that the composition exists in Uniform
 *   2. Verify the slug matches: await getCompositionBySlug("home")
 *   3. Check that UNIFORM_API_KEY and UNIFORM_PROJECT_ID are set
 *   4. Review server logs for API errors
 *
 * - If components don't render:
 *   1. Check that component is registered in lib/uniform-components.ts
 *   2. Verify component parameters match the Uniform definition
 *   3. Check browser console for React errors
 */
