export type ObjectId = "sphere" | "cone" | "cube" | "heart";

export type Object = {
  isVisible: boolean;
  size: number;
  color: string;
  position: [number, number, number];
  opacity: number;
};

export type Objects = {
  sphere: Object;
  cone: Object;
  cube: Object;
  heart: Object;
};

export const DefaultObjects: Objects = {
  sphere: {
    isVisible: true,
    size: 1,
    color: "#3c5c9d",
    position: [0, 1, 4],
    opacity: 1,
  },
  cone: {
    isVisible: false,
    size: 1,
    color: "#2f7f4f",
    position: [3, 1, 4],
    opacity: 1,
  },
  cube: {
    isVisible: false,
    size: 1,
    color: "#DB7029",
    position: [-3, 1, 4],
    opacity: 1,
  },
  heart: {
    isVisible: true,
    size: 10,
    color: "#3c5c9d",
    position: [0, 1, -4],
    opacity: 0.5,
  },
};
