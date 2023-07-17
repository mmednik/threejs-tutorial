"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const gltf = useLoader(GLTFLoader, "frog.glb");
  return (
    <div className="h-screen">
      <Canvas camera={{position: [0, 0, -10]}}>
        <primitive object={gltf.scene} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
