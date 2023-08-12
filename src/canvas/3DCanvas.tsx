import { Canvas } from "@react-three/fiber";
import { Truss } from "../components/Truss";

export const ThreeDimCanvas = () => {
  return (
    <div style={{ width: "800px", height: "600px" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={[0.53, 0.81, 0.94]} />
        <directionalLight intensity={0.5} />
        <Truss />
      </Canvas>
    </div>
  );
};
