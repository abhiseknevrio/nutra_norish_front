import './App.css';
import Header from './components/atom/Header';
import HeroSection from './components/organism/HeroSection';
import DifferenceSection from './components/molecule/DifferenceSection'
import MediaSection from './components/molecule/MediaSection'
import HealthierHappierSection from './components/molecule/HealthierHappierSection'
import NewWorldSection from './components/molecule/NewWorldSection'
import PremiumQuality from './components/molecule/PremiumQuality'
import HowItWorks from './components/molecule/HowItWorks'
import ContactFormSection from './components/molecule/ContactFormSection'
import FeedbackSectionByClient from './components/molecule/FeedbackSectionByClient';
import PersonalisedSection from './components/molecule/PersonalisedSection';
import BlogSection from './components/molecule/BlogSection';
import Footer from './components/molecule/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div>
        <div className='heroBg'>
          <Header showNavbar={showNavbar} />
          <HeroSection />
        </div>
        <DifferenceSection />
        <MediaSection />
        <HealthierHappierSection />
        <NewWorldSection />
        <HowItWorks />
        <PremiumQuality />
        <FeedbackSectionByClient />
        <PersonalisedSection />
        <BlogSection />
        <ContactFormSection />
        <Footer />
      </div>
    </>
  );
}

export default App;