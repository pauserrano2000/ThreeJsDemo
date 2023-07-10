import { FC } from "react";

type SphereProps = {
  size: number;
  color: string;
  position: [number, number, number];
  opacity: number;
};

export const Sphere: FC<SphereProps> = ({ size, color, position, opacity }) => {
  return (
    <mesh position={position} scale={[size,size,size]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};
