# Uniform CMS Integration Guide

This document explains how the Uniform CMS integration works in this PurFlutes.com project.

## Architecture Overview

The integration follows a component-based architecture where:

1. **Uniform Cloud** - Hosts all content (pages, products, events, partners, videos)
2. **Next.js App** - Fetches and renders Uniform compositions
3. **Component Layer** - Maps Uniform components to React components

## Key Files

### Core Integration Files

- **`lib/uniform.ts`** - Uniform client initialization and data fetching utilities
- **`lib/uniform-components.ts`** - Component type mapping (Uniform → React)
- **`components/uniform/composition-renderer.tsx`** - Main renderer for compositions

### Uniform Component Library

All components are located in `components/uniform/`:

- `hero.tsx` - Hero banner with background image and CTAs
- `mantras-row.tsx` - Three-column philosophy display
- `section-header.tsx` - Section titles with optional links
- `rich-content.tsx` - Flexible text content with optional buttons
- `image-two-column.tsx` - Side-by-side image layout with captions
- `flute-grid.tsx` - Grid of flute products (content references)
- `video-grid.tsx` - Grid of videos (content references)
- `partner-grid.tsx` - Grid of partner organizations
- `event-list.tsx` - List of flute events
- `flute-detail.tsx` - Single flute product detail
- `signup-form.tsx` - Email newsletter signup

## Content Types

The following Uniform content types have been created:

### `flute`
Fields: slug, name, key, tuning, wood, length, priceEUR, status, shortDescription, longDescription, features, primaryImage, audioSrc, youtubeId

### `video`
Fields: slug, title, description, date, featured, videoSourceType, vimeoId, localVideoFile, posterImage, duration

### `partner`
Fields: slug, name, location, url, image, blurb, tags

### `fluteEvent`
Fields: slug, name, date (display), dateISO, location, city, country, url, description, type, featured

## Component Definitions

The following Uniform components have been created:

- `hero` - Page hero section
- `mantrasRow` - Philosophy statements row
- `sectionHeader` - Section heading
- `richContent` - Text content
- `imageTwoColumn` - Dual image layout
- `fluteGrid` - Flute product grid
- `videoGrid` - Video grid
- `partnerGrid` - Partner grid
- `eventList` - Event listing
- `fluteDetail` - Single product detail
- `signupForm` - Newsletter signup

## Usage in Pages

To use Uniform for a page:

### 1. Create a Composition in Uniform

In Uniform Canvas, create a new composition with:
- Type: "page" (or appropriate component type)
- Slug: matches your Next.js route (e.g., "home", "shop", "about")
- Add components to the composition

### 2. Fetch and Render in Next.js

```tsx
import { getCompositionBySlug } from '@/lib/uniform';
import { UniformComposition } from '@/components/uniform/composition-renderer';

export default async function HomePage() {
  const composition = await getCompositionBySlug('home');
  
  return (
    <UniformComposition
      composition={composition}
      fallback={<div>Page not found</div>}
    />
  );
}
```

## Environment Variables

Required environment variables (set in Vercel):

```
UNIFORM_API_KEY=your-api-key
UNIFORM_PROJECT_ID=f12159e9-30b7-4142-974d-4d4020482983
```

## Creating Compositions

To create a page composition in Uniform:

1. Go to Uniform Canvas
2. Click "Create Composition"
3. Choose a composition type (page)
4. Set the slug to match your route
5. Add components and configure them
6. Publish the composition

## Migration Guide

### Migrating Existing Pages

To migrate a hardcoded page to Uniform:

1. Create a Uniform composition with the same layout/content
2. Update the Next.js page to fetch from Uniform
3. Keep the layout.tsx and header/footer as-is (not Uniform-controlled)

### Using Existing Data

The existing data files (`lib/flutes.ts`, `lib/videos.ts`, etc.) can coexist with Uniform. You can:
- Keep them as fallbacks
- Use them for local development without Uniform
- Gradually migrate content to Uniform

## Future Enhancements

- Add preview mode for draft compositions
- Implement live editing with Uniform Canvas
- Add analytics tracking for Uniform components
- Create custom components for specialized features
- Add multi-language support with Uniform locales
