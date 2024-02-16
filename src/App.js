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
import { useEffect, useRef, useState } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPosistion, setPrevScrollPosistion] = useState(0);
  const targetDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setShowNavbar(prevScrollPosistion > currentScrollPosition || currentScrollPosition === 0);
      setPrevScrollPosistion(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosistion]);


  const scrollToDiv = () => {
    if (targetDivRef.current) {
      const yOffset = targetDivRef.current.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <div className='heroBg'>
          <Header showNavbar={showNavbar} onClick={scrollToDiv} />
          <HeroSection targetDivRef={targetDivRef} scrollToDiv={scrollToDiv} />
        </div>
        <DifferenceSection />
        <MediaSection />
        <HealthierHappierSection />
        <NewWorldSection />
        <HowItWorks onClick={scrollToDiv} />
        <PremiumQuality />
        <FeedbackSectionByClient />
        <PersonalisedSection onClick={scrollToDiv} />
        <BlogSection />
        <ContactFormSection />
        <Footer />
      </div>
    </>
  );
}

export default App;