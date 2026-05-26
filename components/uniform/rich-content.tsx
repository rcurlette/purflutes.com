"use client";

interface RichContentProps {
  content: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function RichContent({
  content,
  buttonText,
  buttonHref,
}: RichContentProps) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {buttonText && buttonHref && (
          <div className="mt-8">
            <a
              href={buttonHref}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
