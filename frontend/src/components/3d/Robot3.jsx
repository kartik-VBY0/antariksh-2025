// src/components/3d/Robot3.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function RobotModel() {
  const { scene } = useGLTF("/bb8.glb");
  // smaller scale and slightly lowered position so it fits nicely
  return <primitive object={scene} scale={0.019} position={[0, -0.3, 0]} />;
}

const Robot3 = () => {
  return (
    <div className="w-[320px] h-[400px] md:w-[380px] md:h-[460px] ml-4 -mt-28">
      <Canvas camera={{ position: [2.5, 1.8, 5], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <Environment preset="city" />
        <RobotModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default Robot3;
