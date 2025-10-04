import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import HeroSection from './components/sections/HeroSection';
import SpaceBackground from './Pages/homePage';
import Footer from './components/layout/footer';
import HeroSection from './components/page.component/con1.homePage'
import HomeSections from './components/page.component/con2.homePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <SpaceBackground>
        </SpaceBackground>
         <HeroSection />
         <HomeSections/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
