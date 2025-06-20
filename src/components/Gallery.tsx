'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/Gallery1.jpg', title: 'Academics' },
  { src: '/images/gallery2.jpeg', title: 'Co-curriculars' },
  { src: '/images/gallery3.jpeg', title: 'Sports' },
  { src: '/images/gallery4.jpg', title: 'Main Houses' },
  { src: '/images/gallery5.jpg', title: 'Events' },
  { src: '/images/gallery6.jpg', title: 'Campus Life' },
];

const Gallery = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-serif font-bold text-blue-900 mb-4">
          Life At School
        </h2>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-blue-900 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              
              className={`relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200
                transition-all duration-700 ease-out
                ${
                  visibleIndexes.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                width={400} height={300}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                <div className="w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-6 border-t-4 border-b-4 border-transparent border-l-yellow-400"></div>
                </div>
              </div>

              <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-90 text-white text-center py-2 text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
