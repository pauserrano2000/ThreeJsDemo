import { FC } from "react";
import "./VisibleObjects.css";
import { useThemeContext } from "../../Context/theme-context";
import { IconCircle, IconCone, IconBox, IconHeart } from "../Icons/Icons";
import { ObjectId, Objects } from "../../Domain/Objects";

type VisibleObjectsProps = {
  objects: Objects;
  setObjects: (objects: Objects) => void;
};

export const VisibleObjects: FC<VisibleObjectsProps> = ({
  objects,
  setObjects,
}) => {
  const { theme } = useThemeContext();

  const changeVisibilityHandler = (clickedObject: ObjectId) => {
    setObjects({
      ...objects,
      [clickedObject]: {
        ...objects[clickedObject],
        isVisible: !objects[clickedObject].isVisible,
      },
    });
  };

  return (
    <div className={`visible-objects ${theme}-visible-objects`}>
      <div className={`label ${theme}-label`}>Visible:</div>
      <button
        className={`object ${theme}-object ${
          objects["cube"].isVisible && "active"
        }-object`}
        onClick={(e) => changeVisibilityHandler("cube")}
      >
        <IconBox size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          objects["sphere"].isVisible && "active"
        }-object`}
        onClick={(e) => changeVisibilityHandler("sphere")}
      >
        <IconCircle size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          objects["cone"].isVisible && "active"
        }-object`}
        onClick={(e) => changeVisibilityHandler("cone")}
      >
        <IconCone size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          objects["heart"].isVisible && "active"
        }-object`}
        onClick={(e) => changeVisibilityHandler("heart")}
      >
        <IconHeart size={50} />
      </button>
    </div>
  );
};
