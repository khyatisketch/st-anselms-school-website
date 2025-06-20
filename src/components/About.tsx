'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative bg-grey-900 py-16 font-sans" // blue background
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Left image */}
          <div className="relative">
            <Image
              src="/images/contact.jpg"
              alt="Campus"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              width={400} height={300}
            />
          </div>

          {/* Right content overlapping into image */}
          <div className="relative md:-ml-16 bg-white p-8 rounded-lg shadow-2xl z-10">
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
              About Us
              <div className="mt-1 w-20 border-b-4 border-yellow-400"></div>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
            St. Anselm&rsquo;s is a small school with a big voice in Education, One that is heard and respected far and wide. It was founded by visionaries in 1962. St. Anselm&rsquo;s is unique as it was established by a group of parents known as our Founder members who were dissatisfied with the prevalent system of education then.
             </p>
            <p className="text-gray-700 leading-relaxed">
            The St. Anselm&rsquo;s Association is a parent co-operative. The Governing Body consists of the Trustees, Founder Members, elected Parent Members and Principal. The Founder Members drafted a written constitution which gives the guidelines and framework to the school.
             </p>
          </div>
        </div>

        {/* Enquire Now button */}
        {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <button className="bg-yellow-400 text-black px-3 py-2 rounded-l font-semibold hover:bg-yellow-500 transition">
            Enquire Now
          </button>
        </div> */}
      </div>
    </motion.section>
  );
};

export default About;
