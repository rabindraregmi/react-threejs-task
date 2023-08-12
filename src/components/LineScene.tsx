import { useThree } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { Truss } from "./Truss";
import { useSceneContext } from "../contexts/useScene";

export const LineScene = () => {
  const camera = useThree((state) => state.camera);
  const lineRef = useRef<any>(null);
  const {points, handleAddNewPoint} = useSceneContext();

  const onMouseDown = (evt: MouseEvent) => {
    const x = evt.clientX;
    const y = evt.clientY;

    if(x > 800 || y > 600) return

    let ndcCoord = new THREE.Vector3(
      (x / 800.0) * 2.0 - 1.0,
      -(y / 600.0) * 2.0 + 1,
      0.0
    );

    ndcCoord = ndcCoord.unproject(camera);
    handleAddNewPoint(ndcCoord)
  };

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <>
      <group position={[0, 0.0, 0.0]}>
        {points.length > 0 && (
          <Line points={points} color={"red"} ref={lineRef}>
            <bufferGeometry
              onUpdate={(geom) => {
                geom.setFromPoints(points);
              }}
            ></bufferGeometry>
          </Line>
        )}
      </group>
    </>
  );
};
