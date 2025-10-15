// src/components/3d/Meteor.jsx
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

useGLTF.preload("/meteor.glb");

function MeteorModel() {
  const { scene } = useGLTF("/meteor.glb");
  const group = useRef();

  const startPos = { x: 18, y: 16, z: -2 }; 
  const [pos, setPos] = useState(startPos);
  const [visible, setVisible] = useState(true);
  const [angle, setAngle] = useState(0); // for spiral motion

  const { rotationZ } = useSpring({
    from: { rotationZ: -0.15 },
    to: async (next) => {
      while (1) {
        await next({ rotationZ: 0.15 });
        await next({ rotationZ: -0.15 });
      }
    },
    config: { duration: 5000 },
    loop: true,
  });

  useFrame((_, delta) => {
    if (!group.current || !visible) return;

    setPos((p) => {
      const blackHoleRadius = 1.5;
      const distanceToCenter = Math.sqrt(p.x ** 2 + p.y ** 2 + p.z ** 2);

      let newPos;

      // Start spiral motion when close to Black Hole
      // Start spiral motion when close to Black Hole
if (distanceToCenter < 10) { 
  // Spiral coordinates around center (0,0)
  setAngle((a) => a + delta * 0.4); // slower spiral
  const radius = distanceToCenter * 0.7     ; // radius shrinking as it approaches
  newPos = {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    z: p.z + delta * 0.2,
  };
}
 else {
        // Normal diagonal movement
        newPos = {
          x: p.x - delta * 1.2,
          y: p.y - delta * 1.1,
          z: p.z + delta * 0.2,
        };
      }

      if (
        Math.abs(newPos.x) < blackHoleRadius &&
        Math.abs(newPos.y) < blackHoleRadius &&
        Math.abs(newPos.z) < blackHoleRadius
      ) {
        setVisible(false); // disappear
        setTimeout(() => {
          setPos(startPos);
          setVisible(true);
          setAngle(0); // reset spiral
        }, 3000);
        return p;
      }

      return newPos;
    });

    group.current.position.set(pos.x, pos.y, pos.z);
    group.current.rotation.x += 0.002;
    group.current.rotation.y += 0.004;
  });

  if (!visible) return null;

  return (
    <a.group ref={group} scale={1.2} rotation-z={rotationZ}>
      <primitive object={scene} />
    </a.group>
  );
}

export default function Meteor() {
  return (
    <Canvas
      camera={{ position: [0, 0, 36], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[15, 15, 15]} intensity={1.5} />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <MeteorModel />
      </Suspense>
    </Canvas>
  );
}
