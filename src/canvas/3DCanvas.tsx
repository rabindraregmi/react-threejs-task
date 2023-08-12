import { Canvas } from "@react-three/fiber";
import { Truss } from "../components/Truss";
import { Html } from "@react-three/drei";
import { useSceneContext } from "../contexts/useScene";

export const ThreeDimCanvas = () => {
    const {points} = useSceneContext()
  return (
    <div style={{ width: "800px", height: "600px" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={[0.53, 0.81, 0.94]} />
        <directionalLight intensity={0.5} />
        <Truss />
      </Canvas>

      <ul>
    {points.map((point, index) => {
       return  <li key = {`Point-${index}`}>{point.toArray().join(",")}</li>
    })}
      </ul>
    </div>
  );
};
