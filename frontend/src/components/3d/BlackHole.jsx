import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";

function BlackHoleModel() {
  const { scene } = useGLTF("/blackhole.glb");
  return <primitive object={scene} scale={2} position={[0, 1.8, 0]} />; // bigger and slightly downward
}

const BlackHole = () => {
  return (
    <div className="relative w-full h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-visible mt-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        {/* Stars background */}
        <Stars radius={100} depth={80} count={7000} factor={4} fade />

        {/* 3D Model */}
        <Suspense fallback={null}>
          <BlackHoleModel />
        </Suspense>

        {/* Smooth auto rotation */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 2 - 0.1 }
          maxPolarAngle={Math.PI / 2 + 0.1}
        />
      </Canvas>

      {/* Gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#000814] pointer-events-none"></div>
    </div>
  );
};

export default BlackHole;
