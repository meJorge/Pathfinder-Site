import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Recommendations from './components/sections/Recommendations';
import ProgramDetail from './components/sections/ProgramDetail';
import Learning from './components/sections/Learning';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recommendations />
        <ProgramDetail />
        <Learning />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;