import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Features from './components/Features';
import OneTimePurchase from './components/OneTimePurchase';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-gray-100 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Features />
        <OneTimePurchase />
        {/* <Showcase /> */}
        {/* <Pricing /> */}
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
