import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import Swapper from '@/components/Swapper';
import CommunityClone from '@/components/CommunitClone';
import Footer from '@/components/Footer';

const Home = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== hasScrolled) {
        setHasScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div className="bg-hero  min-h-[100vh] h-[900px] w-full">
      <div className="sticky top-0 z-[100]">
        <Navbar hasScrolled={hasScrolled} />
      </div>
      <HeroBanner />
      <Swapper />
      <CommunityClone />
      <Footer />
    </div>
  );
};

export default Home;
