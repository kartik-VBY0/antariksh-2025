import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function RobotModel() {
  const { scene } = useGLTF("/c3po.glb");
  const ref = useRef();

  // Float animation
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = 0 + Math.sin(clock.getElapsedTime()) * 0.15; // slightly lower
      ref.current.rotation.y += 0.002; // slow rotation
    }
  });

  return <primitive ref={ref} object={scene} scale={0.7} position={[0, 0, 0]} />; // lower base position
}

const Robot = () => {
  return (
    <div className="absolute left-0 top-1/4 w-60 h-72 md:w-80 md:h-96 lg:w-96 lg:h-[32rem] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={1} />
        <Environment preset="sunset" background={false} />

        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Robot;
