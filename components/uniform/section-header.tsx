"use client";

interface SectionHeaderProps {
  label?: string;
  title: string;
  linkText?: string;
  linkHref?: string;
}

export default function SectionHeader({
  label,
  title,
  linkText,
  linkHref,
}: SectionHeaderProps) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          {label && (
            <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-2">
              {label}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        {linkText && linkHref && (
          <a
            href={linkHref}
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            {linkText} →
          </a>
        )}
      </div>
    </section>
  );
}
