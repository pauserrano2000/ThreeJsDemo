import { FC } from "react";

type CubeProps = {
  size: number;
  color: string;
  position: [number, number, number];
  opacity: number;
};

export const Cube: FC<CubeProps> = ({ size, color, position, opacity }) => {
  return (
    <mesh position={position} scale={[size, size, size]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};
