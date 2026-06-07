# Uniform Setup Checklist & Next Steps

## ✅ Completed Tasks

### 1. **Uniform SDK Installation**
- ✅ Installed `@uniformdev/canvas`, `@uniformdev/canvas-next-rsc`, `@uniformdev/context`
- ✅ Environment variables configured: `UNIFORM_API_KEY`, `UNIFORM_PROJECT_ID`

### 2. **Content Types Created**
- ✅ `flute` - Product catalog for handcrafted flutes
- ✅ `video` - Video entries (Vimeo or local)
- ✅ `partner` - Partner organizations and collaborators
- ✅ `fluteEvent` - Events, workshops, ceremonies

### 3. **Component Definitions Created**
- ✅ `hero` - Hero banners with CTA buttons
- ✅ `mantrasRow` - Philosophy/values display
- ✅ `sectionHeader` - Section titles with optional links
- ✅ `richContent` - Flexible text content
- ✅ `imageTwoColumn` - Dual image layouts
- ✅ `fluteGrid` - Flute product grids
- ✅ `videoGrid` - Video galleries
- ✅ `partnerGrid` - Partner organization grids
- ✅ `eventList` - Event listings
- ✅ `fluteDetail` - Single product detail views
- ✅ `signupForm` - Email newsletter signup

### 4. **Content Entries Migrated**
- ✅ **3 Flute entries**: Mystic, River Song, Drone
- ✅ **3 Video entries**: Field recordings 01-03 (featured)
- ✅ **5 Partner entries**: Angus Ross, The Purifier, Purifier Crafts, Savaya Tribe, Zendō Space
- ✅ **4 Event entries**: TRYP Berlin, Rhodope Circle, Summer Retreat, Plovdiv Healing

### 5. **Integration Code Created**
- ✅ `lib/uniform.ts` - Client & data fetching utilities
- ✅ `lib/uniform-components.ts` - Component mapping
- ✅ `components/uniform/composition-renderer.tsx` - Composition renderer
- ✅ All 11 Uniform component implementations

### 6. **Documentation**
- ✅ `UNIFORM_INTEGRATION.md` - Complete integration guide
- ✅ `UNIFORM_PAGE_EXAMPLE.tsx` - Example page implementation

---

## 🎯 Next Steps

### Step 1: Create Your First Page Composition

1. Go to **Uniform Canvas**: https://uniform.app/projects/f12159e9-30b7-4142-974d-4d4020482983
2. Click **"Create Composition"**
3. Configure:
   - **Name**: Home Page
   - **Slug**: home
   - **Type**: Select a page composition type
4. Click **"Create"**

### Step 2: Build the Composition

In the Uniform editor:

1. Click **"Add Component"**
2. Select `hero` component
3. Configure:
   - Tagline: "Sound · Breath · Ceremony"
   - Heading: "Tune out the noise."
   - Heading Highlight: "Tune into the soul."
   - Description: "Handcrafted Native American style flutes for meditation..."
   - Background Image: Upload/select `/banner.png`
   - Buttons: Select "explore-flutes" and "tryp-berlin"

4. Add remaining components in order:
   - `mantrasRow` (sound is medicine, breath is bridge, music is portal)
   - `sectionHeader` (The Flutes section)
   - `fluteGrid` (reference the 3 flute entries)
   - `imageTwoColumn` (workshop and playing photos)
   - `sectionHeader` (The Makers section)
   - `richContent` (about the makers)
   - `signupForm` (newsletter signup)

5. Click **"Publish"** when done

### Step 3: Update the Next.js Page

1. Replace `/vercel/share/v0-project/app/page.tsx` with code from `UNIFORM_PAGE_EXAMPLE.tsx`
2. Run the dev server: `pnpm dev`
3. Visit http://localhost:3000 to see the Uniform-driven homepage

### Step 4: Repeat for Other Pages

For each page route, follow the same pattern:

**For `/about`:**
- Create composition with slug "about"
- Add relevant components
- Update `app/about/page.tsx`

**For `/shop`:**
- Create composition with slug "shop"
- Add `fluteGrid` with all flutes
- Update `app/shop/page.tsx`

**For `/gallery`:**
- Create composition with slug "gallery"
- Add `videoGrid` with video entries
- Update `app/gallery/page.tsx`

**For `/partners`:**
- Create composition with slug "partners"
- Add `partnerGrid` with all partners
- Update `app/partners/page.tsx`

**For `/tryp`:**
- Create composition with slug "tryp"
- Add `eventList` with event entries
- Update `app/tryp/page.tsx`

### Step 5: Content Management

Once live, you can manage content in Uniform:

- **Add new products**: Create new `flute` entries
- **Add events**: Create new `fluteEvent` entries
- **Update pages**: Edit compositions in Uniform Canvas
- **Modify content**: Edit entries and republish

---

## 📋 Checklist for Full Migration

- [ ] Create "home" composition in Uniform
- [ ] Create "about" composition
- [ ] Create "shop" composition
- [ ] Create "gallery" composition
- [ ] Create "videos" composition (if separate)
- [ ] Create "partners" composition
- [ ] Create "workshop" composition
- [ ] Create "order" composition
- [ ] Create "tryp" composition
- [ ] Update `app/page.tsx` to use Uniform
- [ ] Update `app/about/page.tsx`
- [ ] Update `app/shop/page.tsx`
- [ ] Update `app/gallery/page.tsx`
- [ ] Update `app/videos/page.tsx`
- [ ] Update `app/partners/page.tsx`
- [ ] Update `app/workshop/page.tsx`
- [ ] Update `app/order/page.tsx`
- [ ] Update `app/tryp/page.tsx`
- [ ] Test all pages render correctly
- [ ] Deploy to production

---

## 🔧 Useful Commands

### Development
```bash
# Start dev server
pnpm dev

# Check types
pnpm type-check

# Lint code
pnpm lint
```

### Testing
```bash
# Visit in browser
# http://localhost:3000

# Check Uniform API is working
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.uniform.app/v1/compositions?projectId=f12159e9-30b7-4142-974d-4d4020482983"
```

---

## 🚀 Advanced Features (Future)

Once basic setup is complete, consider:

- **Preview Mode**: Draft compositions before publishing
- **Custom Components**: Create specialized components for unique sections
- **Multi-language**: Use Uniform locales for translations
- **Personalization**: Use Uniform's personalization engine
- **Analytics**: Track component performance
- **A/B Testing**: Test different component variations

---

## 📞 Support & Troubleshooting

### Common Issues

**"UNIFORM_API_KEY is not set"**
- Check Vercel environment variables
- Ensure both `UNIFORM_API_KEY` and `UNIFORM_PROJECT_ID` are set

**"Composition not found"**
- Verify slug matches exactly (case-sensitive)
- Check composition is published in Uniform
- Try visiting Uniform to confirm composition exists

**"Component not found in mapping"**
- Check component is added to `componentMapping` in `lib/uniform-components.ts`
- Verify component type matches exactly

**Content not updating**
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check Uniform composition was published

### Debug Mode

Add logging to `lib/uniform.ts` to debug API calls:

```typescript
console.log("[v0] Fetching composition:", slug);
console.log("[v0] API Key present:", !!process.env.UNIFORM_API_KEY);
console.log("[v0] Project ID:", process.env.UNIFORM_PROJECT_ID);
```

---

## 📚 Resources

- **Uniform Docs**: https://docs.uniform.app
- **Canvas SDK**: https://docs.uniform.app/docs/reference/uniform-sdk
- **Next.js Integration**: https://docs.uniform.app/docs/learn/headless-cms-tutorials/nextjs-app-router
- **API Reference**: https://docs.uniform.app/docs/reference/rest-api

---

## 🎉 You're All Set!

The Uniform integration is complete and ready to use. Start with creating the "home" composition and work through the pages one by one. The existing hardcoded content remains available as a fallback, so there's no risk in migrating gradually.

Happy content managing! 🎵
