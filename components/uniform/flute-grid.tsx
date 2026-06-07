"use client";

/**
 * Flute Grid - displays flutes passed as content references
 * In a real implementation, this would be enhanced with image galleries and interactive elements
 */
interface FluteGridProps {
  flutes?: any[];
}

export default function FluteGrid({ flutes = [] }: FluteGridProps) {
  // This is a placeholder - in the full implementation,
  // this would fetch and display flute entries
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flutes && flutes.length > 0 ? (
            flutes.map((flute: any) => (
              <div
                key={flute.id}
                className="border border-gray-200 rounded p-4 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{flute.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{flute.key}</p>
                <p className="text-sm text-gray-600">€{flute.priceEUR}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No flutes to display</p>
          )}
        </div>
      </div>
    </section>
  );
}
