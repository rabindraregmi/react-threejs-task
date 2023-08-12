
import { FC, createContext, useContext, useState } from "react";
import * as THREE from 'three';


interface IUseSceneContext {
    points: THREE.Vector3[]
    handleAddNewPoint: (point: THREE.Vector3) => void
    clearCanvas: () => void
  
}

const SceneContext = createContext<IUseSceneContext>({
    points: [],
    handleAddNewPoint: function (): void {
        throw new Error('Function not implemented.');
      },
    clearCanvas: function (): void {
        throw new Error('Function not implemented.');
      },
})

export const SceneProvider: FC<{children: React.ReactNode}> = ({ children }) => {

    const [points, setPoints] = useState<THREE.Vector3[]>([])

    const handleAddNewPoint = (newPoint: THREE.Vector3) => {
        setPoints(prev => [...prev, newPoint])
    }

    const clearCanvas = () => {
        setPoints([])
    }
    
  
    return <SceneContext.Provider value={{points, handleAddNewPoint, clearCanvas}}>{children}</SceneContext.Provider>;
  };
  
  export function useSceneContext() {
    return useContext(SceneContext);
  }