'use client'
import React from 'react';
import { motion } from 'framer-motion';

const PrincipalMessage = () => {
  return (
    <section id="principal-message" className="bg-gray-50 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Principal's Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-900 shadow-lg">
            <img 
              src="/images/principal.jpg" 
              alt="Principal of St. Anselm’s"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Principal's Message */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} 
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">
            Message from the Principal
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            At <span className="font-semibold text-blue-800">St. Anselm’s Senior Secondary School</span>, we believe in nurturing not only the intellect but also the character of every child. 
            Our legacy of academic excellence, moral integrity, and holistic development has been our guiding light for decades.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            I warmly welcome you to explore our vibrant community. Together, let’s inspire young minds to achieve their fullest potential — in the classroom, on the field, and beyond.
          </p>
          <p className="mt-6 text-gray-600 italic text-xl">— Father Dominic, Principal</p>
        </motion.div>

      </div>
    </section>
  )
}

export default PrincipalMessage;
