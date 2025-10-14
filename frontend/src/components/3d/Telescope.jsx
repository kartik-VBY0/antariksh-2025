import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function TelescopeModel() {
  const { scene } = useGLTF("/telescope.glb");
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Smooth rotation
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;

      // Up and down float animation
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.12} position={[0.3, 0, 0]} />;
}

const Telescope = () => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: "42rem", // Increased width
        height: "42rem", // Increased height
        right: "-80%", // Adjusted so full model appears
        top: "-70%", // Adjusted slightly upward
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }} // pulled camera slightly back
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />

        <Suspense fallback={null}>
          <TelescopeModel />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Telescope;
