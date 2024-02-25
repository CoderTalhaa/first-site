import { Canvas } from "@react-three/fiber";
import { Environment,  } from "@react-three/drei";
import Laptop from "./Laptop";
import { Suspense } from "react";




const CanvasContainer = () => {

  return (
    <Canvas>
     
      <Environment preset="city" />
      <color args={['#15151a']} attach="background" />
      <Suspense fallback={null}>
      <Laptop  />
      </Suspense>
    </Canvas>
  );
};

export default CanvasContainer;
