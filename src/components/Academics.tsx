'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const academics = [
  { type: 'text', title: 'Athletic Excellence', description: 'Fostering physical fitness, teamwork, and sportsmanship through a robust sports program.' },
  { type: 'image', src: '/images/sports.avif', alt: 'Student playing football on the field' },
  { type: 'text', title: 'Tech-Enhanced Learning', description: 'Empowering students with cutting-edge technology and digital tools.' },
  { type: 'image', src: '/images/science-lab.jpg', alt: 'Students using science lab equipment' },
  { type: 'text', title: 'Ethics and Values', description: 'Instilling leadership, empathy, and integrity through structured programs.' },
  { type: 'image', src: '/images/cultural-program.jpeg', alt: 'Student performing in cultural event' },
  { type: 'text', title: 'Interdisciplinary Learning', description: 'Encouraging connections between subjects to promote critical thinking.' },
  { type: 'image', src: '/images/computer-lab.jpg', alt: 'Students working in computer lab' },
  { type: 'text', title: 'Innovative Research', description: 'Providing students opportunities for projects, experiments, and exploration.' },
];

const notices = [
  { title: 'Annual Day Schedule', link: '/pdfs/annual-day.pdf' },
  { title: 'Exam Timetable', link: '/pdfs/exam-timetable.pdf' },
  { title: 'Fee Structure 2025', link: '/pdfs/fee-structure.pdf' },
];

const downloads = [
  { title: 'Prospectus 2025', link: '/pdfs/prospectus.pdf' },
  { title: 'Admission Form', link: '/pdfs/admission-form.pdf' },
  { title: 'Holiday Calendar', link: '/pdfs/holiday-calendar.pdf' },
];

const AcademicsNoticesDownloads = () => {
  return (
    <section id="academics" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Academics */}
        <div className="md:w-4/5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-blue-950 mb-8 border-b-2 border-[#D4AF37] inline-block pb-2 text-center mx-auto tracking-wide"
          >
            Academics
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {academics.map((item, index) => (
              item.type === 'text' ? (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-lg shadow-lg overflow-hidden group h-64 cursor-pointer bg-blue-950 text-white transition-colors duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4 group-hover:bg-[#D4AF37] group-hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-serif font-semibold text-center">{item.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[#ced42a] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-sm font-serif text-blue-950 text-center">{item.description}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    width={400} height={300}
                  />
                </motion.div>
              )
            ))}
          </div>
        </div>

        {/* Notices + Downloads combined column */}
        <div id="notices" className="md:w-1/5 flex flex-col gap-12">
          {/* Notices */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-blue-950 mb-8 border-b-2 border-[#D4AF37] inline-block pb-2"
            >
              Notices
            </motion.h2>
            <div className="grid gap-4">
              {notices.map((notice, index) => (
                <motion.a
                  key={index}
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex justify-between items-center bg-white rounded-lg shadow hover:shadow-lg p-4 border border-gray-200 hover:bg-blue-50 transition"
                >
                  <span className="text-lg font-serif font-medium text-blue-900">{notice.title}</span>
                  <span className="text-sm text-blue-600">PDF</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div id='downloads'>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-blue-950 mb-8 border-b-2 border-[#D4AF37] inline-block pb-2"
            >
              Downloads
            </motion.h2>
            <div className="grid gap-4">
              {downloads.map((file, index) => (
                <motion.a 
                  key={index} 
                  href={file.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex justify-between items-center bg-white rounded-lg shadow hover:shadow-md p-4 border border-gray-200 hover:bg-blue-50 transition"
                >
                  <span className="text-lg font-serif font-medium text-blue-900">{file.title}</span>
                  <span className="text-sm text-blue-600">PDF</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsNoticesDownloads;
