// src/components/3d/Planet.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function PlanetModel() {
  const { scene } = useGLTF("/planet_ph.glb"); // put your planet GLB in public folder
  return <primitive object={scene} scale={0.7} position={[0, 0, 0]} />; // adjust scale & position
}

const Planet = () => {
  return (
    <div className="w-[300px] h-[400px] md:w-[350px] md:h-[460px] mr-4 -mt-28">
      <Canvas camera={{ position: [3, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Environment preset="city" />
        <PlanetModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default Planet;
