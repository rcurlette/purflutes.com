# Uniform Integration - File Structure Reference

## Complete File Listing

```
/vercel/share/v0-project/
├── lib/
│   ├── uniform.ts                          [NEW] Uniform client & API utilities
│   ├── uniform-components.ts              [NEW] Component mapping
│   ├── flutes.ts                          [EXISTING] Backup data source
│   ├── videos.ts                          [EXISTING] Backup data source
│   ├── partners.ts                        [EXISTING] Backup data source
│   ├── events.ts                          [EXISTING] Backup data source
│   └── ... (other lib files)
│
├── components/
│   ├── uniform/                           [NEW] Uniform components
│   │   ├── composition-renderer.tsx       Renders Uniform compositions
│   │   ├── hero.tsx                       Hero banner component
│   │   ├── mantras-row.tsx               Philosophy display
│   │   ├── section-header.tsx            Section title component
│   │   ├── rich-content.tsx              Text content component
│   │   ├── image-two-column.tsx          Dual image layout
│   │   ├── flute-grid.tsx                Product grid
│   │   ├── video-grid.tsx                Video gallery
│   │   ├── partner-grid.tsx              Partner grid
│   │   ├── event-list.tsx                Event listing
│   │   ├── flute-detail.tsx              Product detail
│   │   └── signup-form.tsx               Newsletter form
│   │
│   ├── site/                             [EXISTING] Keep as-is
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── ... (other site components)
│   │
│   └── ui/                               [EXISTING] shadcn/ui components
│
├── app/
│   ├── page.tsx                          [TO UPDATE] Currently hardcoded
│   ├── layout.tsx                        [KEEP] Layout stays the same
│   ├── about/page.tsx                    [TO UPDATE]
│   ├── shop/page.tsx                     [TO UPDATE]
│   ├── shop/[slug]/page.tsx             [TO UPDATE]
│   ├── gallery/page.tsx                  [TO UPDATE]
│   ├── videos/page.tsx                   [TO UPDATE]
│   ├── partners/page.tsx                 [TO UPDATE]
│   ├── workshop/page.tsx                 [TO UPDATE]
│   ├── order/page.tsx                    [TO UPDATE]
│   └── tryp/page.tsx                     [TO UPDATE]
│
├── Documentation/
│   ├── UNIFORM_SETUP_COMPLETE.md         Final summary & quick start
│   ├── UNIFORM_SETUP_CHECKLIST.md        Step-by-step instructions
│   ├── UNIFORM_INTEGRATION.md            Complete technical guide
│   ├── UNIFORM_PAGE_EXAMPLE.tsx          Example page implementation
│   └── [THIS FILE]                       File structure reference
│
└── package.json                          [UPDATED] Uniform SDK added
```

## Dependencies Added

```json
{
  "dependencies": {
    "@uniformdev/canvas": "^latest",
    "@uniformdev/canvas-next-rsc": "^latest",
    "@uniformdev/context": "^latest"
  }
}
```

## Key Configuration

### Environment Variables
```
UNIFORM_API_KEY=<your-api-key>
UNIFORM_PROJECT_ID=f12159e9-30b7-4142-974d-4d4020482983
```

### Component Type Mapping
```typescript
// lib/uniform-components.ts
{
  hero → components/uniform/hero.tsx
  mantrasRow → components/uniform/mantras-row.tsx
  sectionHeader → components/uniform/section-header.tsx
  richContent → components/uniform/rich-content.tsx
  imageTwoColumn → components/uniform/image-two-column.tsx
  fluteGrid → components/uniform/flute-grid.tsx
  videoGrid → components/uniform/video-grid.tsx
  partnerGrid → components/uniform/partner-grid.tsx
  eventList → components/uniform/event-list.tsx
  fluteDetail → components/uniform/flute-detail.tsx
  signupForm → components/uniform/signup-form.tsx
}
```

## Content Type Schema

### `flute` type
```
- slug (text, required)
- name (text, required)
- key (text, required)
- tuning (text, required)
- wood (text, required)
- length (text, required)
- priceEUR (number, required)
- status (select: available|made-to-order|sold, required)
- shortDescription (text, required)
- longDescription (richText, required)
- features (multi-select)
- primaryImage (asset: image)
- audioSrc (link)
- youtubeId (text)
```

### `video` type
```
- slug (text, required)
- title (text, required)
- description (richText, required)
- date (date, required)
- featured (checkbox)
- videoSourceType (select: vimeo|local, required)
- vimeoId (text)
- localVideoFile (asset: video)
- posterImage (asset: image)
- duration (text)
```

### `partner` type
```
- slug (text, required)
- name (text, required)
- location (text, required)
- url (link)
- image (asset: image, required)
- blurb (richText, required)
- tags (multi-select)
```

### `fluteEvent` type
```
- slug (text, required)
- name (text, required)
- date (text, required)
- dateISO (date, required)
- location (text, required)
- city (text, required)
- country (text, required)
- url (link)
- description (richText, required)
- type (select: expo|ceremony|workshop|festival, required)
- featured (checkbox)
```

## Component Definitions

### `hero` component
```
- tagline: text
- heading: text (required)
- headingHighlight: text
- description: richText
- backgroundImage: asset (image)
- buttons: multi-select
```

### `mantrasRow` component
```
- mantra1: text (required)
- mantra2: text (required)
- mantra3: text (required)
```

### `sectionHeader` component
```
- label: text
- title: text (required)
- linkText: text
- linkHref: text
```

### `richContent` component
```
- content: richText (required)
- buttonText: text
- buttonHref: text
```

### `imageTwoColumn` component
```
- image1: asset (required)
- image1Alt: text (required)
- image1Caption: text (required)
- image1CaptionDetail: text (required)
- image2: asset (required)
- image2Alt: text (required)
- image2Caption: text (required)
- image2CaptionDetail: text (required)
- bottomText: text
```

### `fluteGrid` component
```
- flutes: contentReference (type: flute, multi)
```

### `videoGrid` component
```
- videos: contentReference (type: video, multi)
```

### `partnerGrid` component
```
- partners: contentReference (type: partner, multi)
```

### `eventList` component
```
- events: contentReference (type: fluteEvent, multi)
```

### `fluteDetail` component
```
- flute: contentReference (type: flute)
```

### `signupForm` component
```
- heading: text
- description: text
```

## Data Flow

```
Uniform Cloud
    ↓ (REST API)
lib/uniform.ts
    ├─ getCompositionBySlug(slug)
    ├─ getEntryBySlug(slug)
    └─ getEntriesByType(type)
    ↓
lib/uniform-components.ts
    ↓ (component mapping)
components/uniform/*.tsx
    ↓ (React render)
Browser
```

## File Size Reference

```
lib/uniform.ts ........................ ~65 lines
lib/uniform-components.ts ............ ~46 lines
components/uniform/composition-renderer.tsx ~ 48 lines
components/uniform/hero.tsx ......... ~68 lines
components/uniform/mantras-row.tsx .. ~30 lines
components/uniform/section-header.tsx ~41 lines
components/uniform/rich-content.tsx . ~35 lines
components/uniform/image-two-column.tsx ~72 lines
components/uniform/flute-grid.tsx ... ~37 lines
components/uniform/video-grid.tsx ... ~42 lines
components/uniform/partner-grid.tsx . ~56 lines
components/uniform/event-list.tsx ... ~57 lines
components/uniform/flute-detail.tsx . ~90 lines
components/uniform/signup-form.tsx .. ~45 lines

Total new code: ~828 lines (well-documented, modular)
```

## Import Pattern

All Uniform components use this pattern:

```typescript
"use client";  // Client-side rendering

interface ComponentProps {
  prop1: string;
  prop2?: number;
  // ... match Uniform component definition
}

export default function Component({
  prop1,
  prop2,
}: ComponentProps) {
  // Component implementation
}
```

## Testing Checklist

After implementation, verify:

- [ ] Environment variables are set
- [ ] `pnpm dev` runs without errors
- [ ] http://localhost:3000 loads (current page or Uniform composition)
- [ ] Components render correctly
- [ ] Content references display properly
- [ ] Navigation works between pages
- [ ] Responsive design functions on mobile/tablet
- [ ] Console has no errors
- [ ] TypeScript type-checking passes

## Rollback Strategy

If needed, revert changes:

1. Keep existing `lib/flutes.ts`, `lib/videos.ts`, etc. as fallback
2. Keep original `app/page.tsx` for reference
3. To rollback a page: restore original page file
4. Uniform code can be removed cleanly without affecting existing components
5. Environment variables can be unset without breaking the app

---

**Last Updated**: 2026-05-26
**Integration Status**: Complete and Ready for Use
**Next Action**: Create first Uniform composition in Canvas
