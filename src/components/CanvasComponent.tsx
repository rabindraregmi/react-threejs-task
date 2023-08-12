import React, { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasComponentProps {
  children: ReactNode;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ children }) => {
  return <Canvas>{children}</Canvas>;
};

export default CanvasComponent;
