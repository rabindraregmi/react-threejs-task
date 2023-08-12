import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { LineLoop, Mesh, Vector3 } from "three";

const ShapeDrawer: React.FC<any> = ({ points }) => {
  const meshRef = useRef<Mesh>();

  console.log({points})

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.geometry.setFromPoints(points);
      meshRef.current.geometry.computeBoundingSphere();
    }
  });

  return (
    <group>
      <mesh ref={meshRef as any}>
        <bufferGeometry />
        <lineBasicMaterial color="blue" />
      </mesh>
    </group>
  );
};

export default ShapeDrawer;
