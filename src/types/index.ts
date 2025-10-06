export interface Planet {
  id: number,
  name: string,
  mass: number,
  position: {x: number, y: number},
  velocity: {x: number, y: number},
  color: string,
  size: number,
  strokeColor: string,
}