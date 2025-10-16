import { useEffect, useRef } from 'react';
import RotatingBackground from '../components/layout/RotatingBackground';
import HeroSection from '../components/sections/con1.homePage';
import HomeSections from '../components/sections/con2.homePage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/footer';
import FloatingButtons from '../components/layout/top'
const Home1 = ({
  speedFactor = 0.05,
  starColor = [255, 255, 255],
  starCount = 5000,
  rotatingBgProps = {},
} = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };
    setCanvasExtents();

    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        out.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        });
      }
      return out;
    };

    let stars = makeStars(starCount);

    const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    const putPixel = (x, y, brightness) => {
      ctx.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance) => {
      for (let s of stars) {
        s.z -= distance;
        if (s.z <= 1) s.z += 1000;
      }
    };

    let prevTime;

    const tick = (time) => {
      if (!prevTime) prevTime = time;
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);
      clear();

      const cx = w / 2;
      const cy = h / 2;

      for (let s of stars) {
        const x = cx + s.x / (s.z * 0.001);
        const y = cy + s.y / (s.z * 0.001);
        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = s.z / 1000.0;
        const b = 1 - d * d;
        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener('resize', handleResize);
    requestAnimationFrame(tick);

    return () => window.removeEventListener('resize', handleResize);
  }, [speedFactor, starColor, starCount]);

  return (
    <>
    <Navbar/>
      {/* Background Layer */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{ backgroundColor: '#000011' }}
      >
        <RotatingBackground
          imagePath="/blackbg.png"
          slidingSpeed={120}
          opacity={0.4}
          {...rotatingBgProps}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{
            pointerEvents: 'none',
            mixBlendMode: 'screen',
            backgroundColor: 'transparent',
            zIndex: 1,
          }}
        />
      </div>
          <HeroSection />
          <HomeSections/>
          
      <FloatingButtons />
      <Footer />

    </>
  );
};

export default Home1;
