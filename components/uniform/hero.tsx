"use client";

interface HeroProps {
  tagline?: string;
  heading: string;
  headingHighlight?: string;
  description?: string;
  backgroundImage?: { src: string };
  buttons?: string[];
}

export default function Hero({
  tagline,
  heading,
  headingHighlight,
  description,
  backgroundImage,
  buttons,
}: HeroProps) {
  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-12 min-h-96 flex items-center justify-center text-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {tagline && (
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-200 mb-4">
            {tagline}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {heading}
          {headingHighlight && <em className="italic ml-2">{headingHighlight}</em>}
        </h1>
        {description && (
          <div
            className="text-lg md:text-xl text-gray-100 mb-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((btn) => (
              <button
                key={btn}
                className="px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition font-semibold"
              >
                {btn === "explore-flutes" && "Explore the Flutes"}
                {btn === "tryp-berlin" && "Meet us at TRYP Berlin"}
                {btn === "learn-story" && "Learn the Story"}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
