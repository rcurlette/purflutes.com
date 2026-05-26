"use client";

/**
 * Partner Grid - displays partner organizations
 */
interface PartnerGridProps {
  partners?: any[];
}

export default function PartnerGrid({ partners = [] }: PartnerGridProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners && partners.length > 0 ? (
            partners.map((partner: any) => (
              <div
                key={partner.id}
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition"
              >
                {partner.image && (
                  <img
                    src={partner.image.src}
                    alt={partner.image.alt}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{partner.location}</p>
                  <div
                    className="text-gray-700 text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: partner.blurb }}
                  />
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                    >
                      Visit →
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No partners to display</p>
          )}
        </div>
      </div>
    </section>
  );
}
