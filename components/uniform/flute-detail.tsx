"use client";

/**
 * Flute Detail - displays a single flute product
 */
interface FluteDetailProps {
  flute?: any;
}

export default function FluteDetail({ flute }: FluteDetailProps) {
  if (!flute) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-gray-500">Flute not found</div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          {flute.primaryImage && (
            <div>
              <img
                src={flute.primaryImage.src}
                alt={flute.name}
                className="w-full h-96 object-cover rounded"
              />
            </div>
          )}

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{flute.name}</h1>

            <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b">
              <div>
                <p className="text-sm text-gray-500">Musical Key</p>
                <p className="text-lg font-semibold">{flute.key}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tuning</p>
                <p className="text-lg font-semibold">{flute.tuning}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Wood</p>
                <p className="text-lg font-semibold">{flute.wood}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Length</p>
                <p className="text-lg font-semibold">{flute.length}</p>
              </div>
            </div>

            <p className="text-2xl font-bold mb-4">€{flute.priceEUR}</p>

            <div
              className="prose prose-lg mb-8"
              dangerouslySetInnerHTML={{ __html: flute.longDescription }}
            />

            {flute.features && flute.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  {flute.features.map((feature: string, idx: number) => (
                    <li key={idx} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">
              {flute.status === "available"
                ? "Add to Cart"
                : flute.status === "made-to-order"
                  ? "Request Custom"
                  : "Sold Out"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
