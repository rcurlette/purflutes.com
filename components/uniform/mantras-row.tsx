"use client";

interface MantrasRowProps {
  mantra1: string;
  mantra2: string;
  mantra3: string;
}

export default function MantrasRow({
  mantra1,
  mantra2,
  mantra3,
}: MantrasRowProps) {
  const mantras = [mantra1, mantra2, mantra3];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {mantras.map((mantra, idx) => (
          <div key={idx} className="text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              {mantra}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
