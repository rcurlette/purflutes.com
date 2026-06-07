"use client";

interface ImageTwoColumnProps {
  image1: { src: string };
  image1Alt: string;
  image1Caption: string;
  image1CaptionDetail: string;
  image2: { src: string };
  image2Alt: string;
  image2Caption: string;
  image2CaptionDetail: string;
  bottomText?: string;
}

export default function ImageTwoColumn({
  image1,
  image1Alt,
  image1Caption,
  image1CaptionDetail,
  image2,
  image2Alt,
  image2Caption,
  image2CaptionDetail,
  bottomText,
}: ImageTwoColumnProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="relative">
            <img
              src={image1.src}
              alt={image1Alt}
              className="w-full h-96 object-cover rounded"
            />
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                {image1Caption}
              </p>
              <p className="text-lg text-gray-700">{image1CaptionDetail}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <img
              src={image2.src}
              alt={image2Alt}
              className="w-full h-96 object-cover rounded"
            />
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                {image2Caption}
              </p>
              <p className="text-lg text-gray-700">{image2CaptionDetail}</p>
            </div>
          </div>
        </div>

        {bottomText && (
          <div className="text-center pt-8">
            <p className="text-lg md:text-xl text-gray-700 italic">
              {bottomText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
