/**
 * Studio routes need their own layout because the Studio renders its own
 * <html> structure and we don't want the marketing site's nav/footer here.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
