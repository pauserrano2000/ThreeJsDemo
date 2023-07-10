import { FC } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type HeartProps = {
  size: number;
  position: [number, number, number];
  opacity: number;
};

export const Heart: FC<HeartProps> = ({ size, position, opacity }) => {

  const gltf = useLoader(GLTFLoader, "/Heart/Heart.gltf");
  gltf.scene.traverse(function (obj:any) {
    if (obj.isMesh) {
      obj.material.transparent = true;
      obj.material.opacity = opacity;
    }
  });
  
  return (
    <mesh position={position}>
      <primitive object={gltf.scene} scale={size} opacity={opacity} />
    </mesh>
  );
};
