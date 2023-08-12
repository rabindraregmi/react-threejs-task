import { TwoDimenCanvas } from "./canvas/2DCanvas";
import { ThreeDimCanvas } from "./canvas/3DCanvas";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <TwoDimenCanvas />
      <ThreeDimCanvas />
    </div>
  );
}
