import { useFrame, useThree } from "@react-three/fiber";
import {  CameraControls, Extrude, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useSceneContext } from "../contexts/useScene";


export const Truss = ()  => {

    const {points} = useSceneContext()

  

    useFrame((state) => {
      ref.current.rotation.y += 0.01;
      console.log(state.camera.position)
      
    });

 
  
    const ref = useRef<any>(null);
  
    const shape = new THREE.Shape();


    if (points.length > 1) {
      shape.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; ++i)
        shape.lineTo(points[i].x, points[i].y);
      shape.lineTo(points[0].x, points[0].y);
    }
  
    const extrudeSettings = {
      curveSegments: 1,
      steps: 1,
      depth: 0.2,
      bevelEnabled: false,
    };
    return (
      <Extrude
        ref={ref}
        args={[shape, extrudeSettings]}
        onUpdate={(evt) => {
          evt.geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        }}
      >
        <meshNormalMaterial></meshNormalMaterial>
        <OrbitControls />
        {/* <CameraControls/> */}
      </Extrude>
    );
  }