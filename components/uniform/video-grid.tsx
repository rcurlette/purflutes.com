"use client";

/**
 * Video Grid - displays videos passed as content references
 */
interface VideoGridProps {
  videos?: any[];
}

export default function VideoGrid({ videos = [] }: VideoGridProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos && videos.length > 0 ? (
            videos.map((video: any) => (
              <div
                key={video.id}
                className="border border-gray-200 rounded overflow-hidden hover:shadow-lg transition"
              >
                {video.posterImage && (
                  <img
                    src={video.posterImage.src}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No videos to display</p>
          )}
        </div>
      </div>
    </section>
  );
}
