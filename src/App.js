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

function App() {


  const heroBg = {
    backgroundImage: `url(${"/images/heroBg.svg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div>
        <div style={heroBg}>
          <Header />
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
        {/* <ContactFormSection /> */}
      </div>
    </>
  );
}

export default App;