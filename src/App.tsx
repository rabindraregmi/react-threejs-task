import {  useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { LineScene } from "./components/LineScene";
import { Truss } from "./components/Truss";

import * as THREE from 'three';

const Scene = () => {
  const scene = useRef<any | null>(null);
  useFrame(() => {});

  return (
    <group ref={scene}>
      <LineScene />
    </group>
  );
};




export default function App() {
  return (
  <div style = {{display: "flex", gap: "20px"}}>
    <div style={{ width: "800px", height: "600px" }}>
      <Canvas>
        <color attach="background" args={[0.53, 0.81, 0.94]} />
        <directionalLight intensity={0.5} />
        <Scene />
      </Canvas>
    </div>

    <div style={{ width: "800px", height: "600px" }}>
      <Canvas camera={{position: [0, 0,1]}}>
        <color attach="background" args={[0.53, 0.81, 0.94]} />
        <directionalLight intensity={0.5} />
        <Truss />
      </Canvas>
    </div>



  </div>

  );
}
