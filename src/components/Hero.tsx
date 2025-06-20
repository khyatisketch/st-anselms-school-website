import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-50 pt-24 pb-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Welcome to St. Anselm&rsquo;s
          </h1>
          <p className="text-gray-700 mb-6">
            A legacy of excellence in education, character building, and holistic development.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
              Contact Us
            </a>
            <a href="#about" className="border border-blue-700 text-blue-700 px-6 py-3 rounded hover:bg-blue-100">
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 p-4">
          <Image src="/images/school-hero.jpg" alt="St. Anselm’s School" className="rounded shadow-lg"  width={800} height={300} />
        </div>
        
      </div>
    </section>
  )
}

export default Hero;
