import './App.css';
import Header from './components/atom/Header';
import HeroSection from './components/organism/HeroSection';

function App() {

  const heroBg = {
    backgroundImage: `url(${"/images/homeHeroSection.svg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div style={heroBg} className='absolute'>
        <Header />
        <HeroSection />
      </div>
    </>
  );
}

export default App;