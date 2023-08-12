import { Canvas } from "@react-three/fiber"
import { LineScene } from "../components/LineScene"
import { useSceneContext } from "../contexts/useScene"

export const TwoDimenCanvas = () => {

const {clearCanvas} = useSceneContext()

   return  <div style={{ width: "800px", height: "600px" }}>
    <Canvas>
      <color attach="background" args={[0.53, 0.81, 0.94]} />
      <directionalLight intensity={0.5} />
      <LineScene />
    </Canvas>

    <button onClick={() => clearCanvas()}>
        Clear
    </button>
  </div>
}