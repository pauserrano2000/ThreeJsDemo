import { FC } from "react";

type ConeProps = {
  size: number;
  color: string;
  position: [number, number, number];
  opacity: number;
};

export const Cone: FC<ConeProps> = ({ size, color, position, opacity }) => {
  return (
    <mesh position={position} scale={[size, size, size]}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};
