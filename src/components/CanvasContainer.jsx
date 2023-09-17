import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, PerspectiveCamera,  } from "@react-three/drei";
import Laptop from "./Laptop";
import React,{ useRef, useState } from "react";
import { useSpring } from "react-spring/three";




const CanvasContainer = () => {

  return (
    <Canvas>
     
      <Environment preset="city" />
      <color args={['#15151a']} attach="background" />
 
      <Laptop  />
    </Canvas>
  );
};

export default CanvasContainer;
