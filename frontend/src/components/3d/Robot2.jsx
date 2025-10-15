import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Robot2Model() {
  const { scene } = useGLTF("/robot2.glb"); // same model as Robot
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.2;
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.15; // slight float
    }
  });

  return <primitive ref={ref} object={scene} scale={1.1} position={[0, 0, 0]} />;
}

const Robot2 = () => {
  return (
    <div
      className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 pointer-events-none"
      style={{
        right: "5%",   // place on the right
        bottom: "5%",  // below the black hole
      }}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />

        <Suspense fallback={null}>
          <Robot2Model />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Robot2;
