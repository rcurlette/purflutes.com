"use client";

/**
 * Event List - displays flute events
 */
interface EventListProps {
  events?: any[];
}

export default function EventList({ events = [] }: EventListProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {events && events.length > 0 ? (
            events.map((event: any) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded p-6 hover:shadow-md transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-xl mb-2">{event.name}</h3>
                    <div
                      className="text-gray-700 mb-3"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-1">{event.date}</p>
                    <p>{event.location}</p>
                    <p>
                      {event.city}, {event.country}
                    </p>
                    {event.url && (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 mt-3 inline-block"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No events to display</p>
          )}
        </div>
      </div>
    </section>
  );
}
