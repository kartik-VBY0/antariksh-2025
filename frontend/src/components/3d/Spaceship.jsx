import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function SpaceshipModel() {
  const { scene } = useGLTF("/spaceship.glb"); // put spaceship model in public folder
  const ref = useRef();

  // Float animation with slight tilt
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 1.5) * 0.05; // up and down movement
      ref.current.rotation.y += 0.001; // slow rotation
      ref.current.rotation.z = Math.sin(t * 0.5) * 0.02; // subtle tilt
    }
  });

  return <primitive ref={ref} object={scene} scale={0.014} position={[0, 0, 0]} />;
}

const Spaceship = () => {
  return (
    <div
      className="absolute w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 pointer-events-none"
      style={{
        right: "10%", // shifted slightly left
        top: "20px",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <SpaceshipModel />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Spaceship;
