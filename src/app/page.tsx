'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PrincipalMessage from '../components/PrincipalMessage';
import Gallery from '../components/Gallery';
import Academics from '../components/Academics';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Achievements from '../components/Achievement';
import About from '../components/About';
import AdmissionDrawer from '../components/AdmissionDrawer';

export default function Home() {

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <PrincipalMessage />
      <Achievements />
      <Academics />
      <Contacts />
      <Footer />
      <button
  onClick={() => setShowDrawer(true)}
  className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-l z-40 shadow-md"
  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
>
  Enquire Now
</button>

      <AdmissionDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
      {/* Add other components here: PrincipalMessage, Gallery, etc */}
    </div>
  )
}
