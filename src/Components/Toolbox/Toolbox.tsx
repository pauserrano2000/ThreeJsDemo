import { FC } from "react";
import "./Toolbox.css";
import { useThemeContext } from "../../Context/theme-context";
import { IconCircle, IconCone, IconBox, IconHeart } from "../Icons/Icons";
import { Objects } from "../../Domain/Objects";
type Object = "sphere" | "cone" | "cube" | "heart";

type ToolboxProps = {
  selectedObject: Object;
  setSelectedObject: (object: Object) => void;
  objects: Objects;
  setObjects: (objects: Objects) => void;
};

export const Toolbox: FC<ToolboxProps> = ({
  selectedObject,
  setSelectedObject,
  objects,
  setObjects,
}) => {
  const { theme } = useThemeContext();

  const changePositionHandler = (event: React.ChangeEvent<HTMLInputElement>, position: "x" | "y" | "z") => {
    setObjects({
      ...objects,
      [selectedObject]: {
        ...objects[selectedObject],
        position: [
          position === "x"
            ? Number(event.target.value)
            : objects[selectedObject].position[0],
          position === "y"
            ? Number(event.target.value)
            : objects[selectedObject].position[1],
          position === "z"
            ? Number(event.target.value)
            : objects[selectedObject].position[2],
        ],
      },
    });
  };

  const changeColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjects({
      ...objects,
      [selectedObject]: {
        ...objects[selectedObject],
        color: event.target.value,
      },
    });
  };

  const changeSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjects({
      ...objects,
      [selectedObject]: {
        ...objects[selectedObject],
        size: Number(event.target.value),
      },
    });
  };

  const changeOpacityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjects({
      ...objects,
      [selectedObject]: {
        ...objects[selectedObject],
        opacity: Number(event.target.value),
      },
    });
  };

  return (
    <div className={`toolbox ${theme}-toolbox`}>
      <div className={`label ${theme}-label`}>Selected:</div>
      <button
        className={`object ${theme}-object ${
          selectedObject === "cube" && "active"
        }-object`}
        onClick={(e) => setSelectedObject("cube")}
      >
        <IconBox size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          selectedObject === "sphere" && "active"
        }-object`}
        onClick={(e) => setSelectedObject("sphere")}
      >
        <IconCircle size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          selectedObject === "cone" && "active"
        }-object`}
        onClick={(e) => setSelectedObject("cone")}
      >
        <IconCone size={50} />
      </button>
      <button
        className={`object ${theme}-object ${
          selectedObject === "heart" && "active"
        }-object`}
        onClick={(e) => setSelectedObject("heart")}
      >
        <IconHeart size={50} />
      </button>

      {selectedObject !== "heart" && (
        <>
          <div className="divider" />
          <div className={`label ${theme}-label`}>Position (x,y,z):</div>
          <input
            type="number"
            value={objects[selectedObject].position[0]}
            onChange={(e) => changePositionHandler(e, "x")}
          />
          <input
            type="number"
            value={objects[selectedObject].position[1]}
            onChange={(e) => changePositionHandler(e, "y")}
          />
          <input
            type="number"
            value={objects[selectedObject].position[2]}
            onChange={(e) => changePositionHandler(e, "z")}
          />
          <div className="divider" />
          <div className={`label ${theme}-label`}>Color:</div>
          <input
            type="color"
            value={objects[selectedObject].color}
            onChange={changeColorHandler}
          />
          <div className="divider" />
          <div className={`label ${theme}-label`}>Size:</div>
          <input
            type="range"
            min="0.2"
            max="2"
            step="0.2"
            value={objects[selectedObject].size}
            onChange={changeSizeHandler}
          />
        </>
      )}
      <div className="divider" />
      <div className={`label ${theme}-label`}>Opacity:</div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={objects[selectedObject].opacity}
        onChange={changeOpacityHandler}
      />
    </div>
  );
};
