import { useThemeContext } from "../../Context/theme-context";
import "./SceneViewer.css";
import { FC, useState } from "react";
import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Grid,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import { Toolbox } from "../../Components/Toolbox/Toolbox";
import { Sphere } from "../../Components/Models/Sphere";
import { DefaultObjects, ObjectId, Objects } from "../../Domain/Objects";
import { Cone } from "../../Components/Models/Cone";
import { Cube } from "../../Components/Models/Cube";
import { Heart } from "../../Components/Models/Heart";
import { VisibleObjects } from "../../Components/VisibleObjects/VisibleObjects";

export const SceneViewer: FC = () => {
  const { theme } = useThemeContext();
  const [selectedObject, setSelectedObject] = useState<ObjectId>("sphere");
  const [objects, setObjects] = useState<Objects>(DefaultObjects);

  return (
    <main className={`scene ${theme}-scene`}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 10] }}>
        {/* Rotate and move camara */}
        <OrbitControls />

        {/* Lights and shadows */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, -3]} />

        {/* Environment */}
        <Grid args={[25, 25]} position={[0, 0, 0]} />

        {/* Models */}
        {objects.sphere.isVisible && (
          <Sphere
            size={objects.sphere.size}
            color={objects.sphere.color}
            position={objects.sphere.position}
            opacity={objects.sphere.opacity}
          />
        )}
        {objects.cone.isVisible && (
          <Cone
            size={objects.cone.size}
            color={objects.cone.color}
            position={objects.cone.position}
            opacity={objects.cone.opacity}
          />
        )}
        {objects.cube.isVisible && (
          <Cube
            size={objects.cube.size}
            color={objects.cube.color}
            position={objects.cube.position}
            opacity={objects.cube.opacity}
          />
        )}
        {objects.heart.isVisible && (
          <Heart
            size={objects.heart.size}
            position={objects.heart.position}
            opacity={objects.heart.opacity}
          />
        )}

        {/*XYZ Camera helper*/}
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#9d4b4b", "#2f7f4f", "#3c5c9d"]}
            labelColor="white"
          />
        </GizmoHelper>
      </Canvas>
      <VisibleObjects objects={objects} setObjects={setObjects} />
      <Toolbox
        selectedObject={selectedObject}
        setSelectedObject={setSelectedObject}
        objects={objects}
        setObjects={setObjects}
      />
    </main>
  );
};
