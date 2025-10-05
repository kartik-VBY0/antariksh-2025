import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home1 from './Pages/homePage';
import Contact from './Pages/contactPage';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/footer';
import Gallery from './Pages/galleryPage';
import About from './Pages/aboutPage';
import EventPage from './Pages/eventPage';

const LayoutWrapper = () => (
  <div className="relative min-h-screen overflow-hidden bg-black">
    {/* Background should cover entire div */}

    
    {/* <Navbar className="relative z-10" /> */}
    <main className="flex-grow relative z-10">
      <Outlet />
    </main>
{/* 
    <Footer className="relative z-10" /> */}
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route element={<LayoutWrapper />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventPage />} />

          {/* more pages */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
